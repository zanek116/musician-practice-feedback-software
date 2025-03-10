import { useState, useEffect } from 'react';
import './TestAudio.css';

const TestAudio = () => {
  const [pitch, setPitch] = useState<number | null>(null);
  const [noiseLevels, setNoiseLevels] = useState<number[]>([]);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [recording, setRecording] = useState(false);
  const [message, setMessage] = useState('');
  const [calibrated, setCalibrated] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);

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
      setPitch(null); // Clear the previous pitch value
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
        // Fetch the detected pitch
        const pitchResponse = await fetch('http://localhost:8080/pitch');
        const pitchData = await pitchResponse.json();
        console.log('Pitch response:', pitchData);
        setPitch(pitchData.pitch);

        // Fetch the detected noise levels
        const noiseResponse = await fetch('http://localhost:8080/noise');
        const noiseData = await noiseResponse.json();
        console.log('Noise response:', noiseData);
        setNoiseLevels(noiseData.noise_levels);

        setRecording(false);
        setShowSaveButton(true);
      }, 2000); // Wait for 2 seconds to ensure pitch and noise level detection is complete
    } catch (error) {
      console.error('Error fetching the API message:', error);
      setRecording(false);
    }
  };

  const handleSaveRecording = async () => {
    const filename = prompt('Enter a filename for the recording:', 'recording.wav');
    if (filename) {
      try {
        const response = await fetch('http://localhost:8080/save_recording', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ filename }),
        });
        const data = await response.json();
        console.log('Save recording response:', data);
        setMessage('Recording saved successfully.');
        setShowSaveButton(false);
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
      {message && <p>{message}</p>}
      {countdown !== null && <p>{countdown}... seconds</p>}
      {pitch !== null && <p>Detected Pitch: {pitch} Hz</p>}
      {noiseLevels.length > 0 && (
        <div>
          <h2>Detected Noise Levels:</h2>
          {noiseLevels.map((level, index) => (
            <p key={index}>Millisecond {index + 1}: {level} dB</p>
          ))}
        </div>
      )}
      {showSaveButton && (
        <button onClick={handleSaveRecording} className="save-button">
          Save Recording
        </button>
      )}
    </div>
  );
};

export default TestAudio;