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
    // Automatically calibrate the baseline noise level when the component mounts
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
      setPitchLevels([]); // Clear the previous pitch levels
      setNoiseLevels([]); // Clear the previous noise levels
      setMessage('Recording for...');
      setCountdown(5);

      // Start pitch detection
      const startPitchResponse = await fetch('http://localhost:8080/start_pitch_detection');
      const startPitchData = await startPitchResponse.json();
      console.log('Start pitch detection response:', startPitchData);

      // Countdown timer
      for (let i = 5; i > 0; i--) {
        setCountdown(i);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setCountdown(null);
      setMessage('Playing back recording:');

      // Wait for a short period to allow pitch and noise level detection to complete
      setTimeout(async () => {
        // Fetch the detected pitch levels
        const pitchResponse = await fetch('http://localhost:8080/pitch');
        const pitchData = await pitchResponse.json();
        console.log('Pitch response:', pitchData);
        setPitchLevels(pitchData.pitch_levels);

        // Fetch the detected noise levels
        const noiseResponse = await fetch('http://localhost:8080/noise');
        const noiseData = await noiseResponse.json();
        console.log('Noise response:', noiseData);
        setNoiseLevels(noiseData.noise_levels);

        setRecording(false);
      }, 2000); // Wait for 2 seconds to ensure pitch and noise level detection is complete
    } catch (error) {
      console.error('Error fetching the API message:', error);
      setRecording(false);
    }
  };

  return (
    <div className="test-audio-container">
      <h1>Testing</h1>
      <button onClick={handleClick} disabled={recording || !calibrated} className="record-button">
        {recording ? 'Recording...' : 'Click me!'}
      </button>
      {message && <p>{message}</p>}
      {countdown !== null && <p>{countdown}... seconds</p>}
      {pitchLevels.length > 0 && noiseLevels.length > 0 && (
        <div>
          <h2>Detected Pitch and Noise Levels:</h2>
          {pitchLevels.map((pitch, index) => (
            <p key={index}>
              Millisecond {index + 1}: Pitch: {pitch !== null ? pitch.toFixed(2) : 'N/A'} Hz, dB: {noiseLevels[index].toFixed(2)}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestAudio;