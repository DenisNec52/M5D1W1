import React from 'react';
import './MyIntro.css'; // Assicurati di avere un file CSS collegato con il nome specificato

function Intro() {
  return (
    <div className="welcome-nerd-container">
      <h1 className="welcome-nerd-title">
        <span role="img" aria-label="nerd-face">
          🤓
        </span>{' '}
        Welcome, Nerd{' '}
        <span role="img" aria-label="nerd-face">
          🤓
        </span>
      </h1>
      <p className="welcome-nerd-subtitle">
        Embrace your nerdiness and let's explore the world of knowledge together!
      </p>
    </div>
  );
}

export default Intro;