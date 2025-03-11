import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
    <div className="image-overlay">
      <img src="/CoolMusic.png" alt="Background" />
    </div>
      <h1 className="home-title">Welcome to Musician Practice Feedback Software!</h1>
      <p className="home-description">The best practice software on the planet.</p>
    </div>
  );
};

export default Home;