import React, { useState } from 'react';
import './TestAudio.css';

const TestAudio = () => {
  const [pitch, setPitch] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [recording, setRecording] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      setRecording(true);
      setPitch(null); // Clear the previous pitch value
      setMessage('Recording for...');
      setCountdown(5);

      // Start pitch detection
      const startResponse = await fetch('http://localhost:8080/start_pitch_detection');
      const startData = await startResponse.json();
      console.log('Start pitch detection response:', startData);

      // Countdown timer
      for (let i = 5; i > 0; i--) {
        setCountdown(i);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setCountdown(null);
      setMessage('Playing back recording:');

      // Wait for a short period to allow pitch detection to complete
      setTimeout(async () => {
        // Fetch the detected pitch
        const pitchResponse = await fetch('http://localhost:8080/pitch');
        const pitchData = await pitchResponse.json();
        console.log('Pitch response:', pitchData);
        setPitch(pitchData.pitch);
        setRecording(false);
      }, 1000); // Wait for 1 second to ensure pitch detection is complete
    } catch (error) {
      console.error('Error fetching the API message:', error);
      setRecording(false);
    }
  };

  return (
    <div className="test-audio-container">
      <h1>Testing</h1>
      <button onClick={handleClick} disabled={recording} className="record-button">
        {recording ? 'Recording...' : 'Click me!'}
      </button>
      {message && <p>{message}</p>}
      {countdown !== null && <p>{countdown}... seconds</p>}
      {pitch !== null && <p>Detected Pitch: {pitch} Hz</p>}
    </div>
  );
};

export default TestAudio;