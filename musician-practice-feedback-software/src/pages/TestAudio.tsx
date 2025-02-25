import { useState } from 'react';

const TestAudio = () => {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:8080/test');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching the API message:', error);
    }
  };

  return (
    <div>
      <h1>Testing</h1>
      <button onClick={handleClick}>Click me!</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TestAudio;