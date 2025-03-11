import { useState, useEffect } from 'react';

const Recordings = () => {
  const [recordings, setRecordings] = useState<string[]>([]);

  useEffect(() => {
    fetchRecordings();
  }, []);

  const fetchRecordings = async () => {
    try {
      const response = await fetch('http://localhost:8080/recordings');
      const data = await response.json();
      setRecordings(data.recordings.map((rec: string) => rec.replace('.wav', '')));
    } catch (error) {
      console.error('Error fetching recordings:', error);
    }
  };

  const handlePlayRecording = (filename: string) => {
    const audio = new Audio(`http://localhost:8080/recordings/${filename}.wav`);
    audio.play();
  };

  return (
    <div className="recordings-container">
      <h1>Recordings</h1>
      <h2>Saved Recordings:</h2>
      {recordings.map((recording, index) => (
        <button key={index} onClick={() => handlePlayRecording(recording)}>
          {recording}
        </button>
      ))}
    </div>
  );
};

export default Recordings;