import React, { useState, useEffect } from 'react';
import './TestAudio.css';

const TestAudio = () => {
  const [pitchLevels, setPitchLevels] = useState<(number | null)[]>([]);
  const [noiseLevels, setNoiseLevels] = useState<number[]>([]);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [recording, setRecording] = useState(false);
  const [message, setMessage] = useState('');
  const [calibrated, setCalibrated] = useState(false);

  useEffect(() => {
    const calibrateBaseline = async () => {
      try {
        setMessage('Calibrating baseline noise level...');
        const calibrateResponse = await fetch('http://localhost:8080/calibrate_baseline');
        const calibrateData = await calibrateResponse.json();
        console.log('Calibration response:', calibrateData);
        setCalibrated(true);
        setMessage('Baseline noise level calibrated.');
      } catch (error) {
        console.error('Error calibrating baseline noise level:', error);
        setMessage('Failed to calibrate baseline noise level.');
      }
    };

    calibrateBaseline();
  }, []);

  const handleClick = async () => {
    if (!calibrated) {
      setMessage('Please wait, calibrating baseline noise level...');
      return;
    }

    try {
      setRecording(true);
      setPitchLevels([]);
      setNoiseLevels([]);
      setMessage('Recording for...');
      setCountdown(5);

      const startPitchResponse = await fetch('http://localhost:8080/start_pitch_detection');
      const startPitchData = await startPitchResponse.json();
      console.log('Start pitch detection response:', startPitchData);

      for (let i = 5; i > 0; i--) {
        setCountdown(i);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setCountdown(null);
      setMessage('Playing back recording:');

      setTimeout(async () => {
        const pitchResponse = await fetch('http://localhost:8080/pitch');
        const pitchData = await pitchResponse.json();
        console.log('Pitch response:', pitchData);
        setPitchLevels(pitchData.pitch_levels);

        const noiseResponse = await fetch('http://localhost:8080/noise');
        const noiseData = await noiseResponse.json();
        console.log('Noise response:', noiseData);
        setNoiseLevels(noiseData.noise_levels);

        setRecording(false);
      }, 2000);
    } catch (error) {
      console.error('Error fetching the API message:', error);
      setRecording(false);
    }
  };

  const handleSaveRecording = async () => {
    const filename = prompt('Enter a filename for the recording:', 'recording');
    if (filename) {
      try {
        const response = await fetch('http://localhost:8080/save_recording', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ filename: `${filename}.wav` }),
        });
        const data = await response.json();
        console.log('Save recording response:', data);
        setMessage('Recording saved successfully.');
      } catch (error) {
        console.error('Error saving recording:', error);
        setMessage('Failed to save recording.');
      }
    }
  };

  return (
    <div className="test-audio-container">
      <h1>Testing</h1>
      <button onClick={handleClick} disabled={recording || !calibrated} className="record-button">
        {recording ? 'Recording...' : 'Click me!'}
      </button>
      {message && <p className="message">{message}</p>}
      {countdown !== null && <p className="countdown">{countdown}... seconds</p>}
      {pitchLevels.length > 0 && noiseLevels.length > 0 && (
        <div className="results">
          <h2>Detected Pitch and Noise Levels:</h2>
          {pitchLevels.map((pitch, index) => (
            <p key={index} className="result-item">
              <span className="result-time">Millisecond {index + 1}:</span>
              <span className="result-pitch">Pitch: {pitch !== null ? pitch.toFixed(2) : 'N/A'} Hz</span>
              <span className="result-noise">dB: {noiseLevels[index].toFixed(2)}</span>
            </p>
          ))}
        </div>
      )}
      <button onClick={handleSaveRecording} className="save-button">
        Save Recording
      </button>
    </div>
  );
};

export default TestAudio;