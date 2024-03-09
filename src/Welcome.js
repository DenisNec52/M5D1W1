import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Alert variant="info">
        This is a welcome message. Feel free to explore the app!
      </Alert>
    </div>
  );
};

export default Welcome;