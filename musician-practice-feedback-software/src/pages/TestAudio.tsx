import React, { useState, useEffect } from 'react';
import './TestAudio.css';

const TestAudio = () => {
  const [pitchLevels, setPitchLevels] = useState<(number | null)[]>([]);
  const [noiseLevels, setNoiseLevels] = useState<number[]>([]);
  const [recording, setRecording] = useState(false);
  const [message, setMessage] = useState('');
  const [calibrated, setCalibrated] = useState(false);
  const [calibrating, setCalibrating] = useState(true);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const calibrateBaseline = async () => {
      try {
        setMessage('Calibrating baseline noise level...');
        const calibrateResponse = await fetch('http://localhost:8080/calibrate_baseline');
        const calibrateData = await calibrateResponse.json();
        console.log('Calibration response:', calibrateData);
        setCalibrated(true);
        setMessage('Baseline noise level calibrated.');
        setCalibrating(false);
      } catch (error) {
        console.error('Error calibrating baseline noise level:', error);
        setMessage('Failed to calibrate baseline noise level.');
        setCalibrating(false);
      }
    };

    const countdownInterval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 1) {
          return prevCountdown - 1;
        } else {
          clearInterval(countdownInterval);
          calibrateBaseline();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const handleClick = async () => {
    if (!calibrated) {
      setMessage('Please wait, calibrating baseline noise level...');
      return;
    }

    if (recording) {
      setRecording(false);
      setMessage('Recording stopped.');
      await fetch('http://localhost:8080/stop_pitch_detection');
      // Fetch pitch and noise levels after stopping the recording
      try {
        const pitchResponse = await fetch('http://localhost:8080/pitch');
        const pitchData = await pitchResponse.json();
        console.log('Pitch response:', pitchData);
        setPitchLevels(pitchData.pitch_levels);

        const noiseResponse = await fetch('http://localhost:8080/noise');
        const noiseData = await noiseResponse.json();
        console.log('Noise response:', noiseData);
        setNoiseLevels(noiseData.noise_levels);
      } catch (error) {
        console.error('Error fetching pitch and noise levels:', error);
      }
    } else {
      setRecording(true);
      setPitchLevels([]);
      setNoiseLevels([]);
      setMessage('Recording...');
      await fetch('http://localhost:8080/start_pitch_detection');
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
      <button onClick={handleClick} disabled={!calibrated || calibrating} className="record-button">
        {recording ? 'Stop Recording' : 'Record Audio'}
        <span className={`record-icon ${recording ? 'recording' : ''}`}></span>
      </button>
      <button onClick={handleSaveRecording} className="save-button">
        Save Recording
      </button>
      {calibrating && <p className="message">Calibrating... {countdown} seconds remaining</p>}
      {message && <p className="message">{message}</p>}
      {pitchLevels.length > 0 && noiseLevels.length > 0 && (
        <div className="results">
          <h2>Detected Pitch and Noise Levels:</h2>
          {pitchLevels.map((pitch, index) => (
            <p key={index} className="result-item">
              <span className="result-time">Millisecond {index * 10}:</span>
              <span className="result-pitch">Pitch: {pitch !== null ? pitch.toFixed(2) : 'N/A'} Hz</span>
              <span className="result-noise">dB: {noiseLevels[index].toFixed(2)}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestAudio;