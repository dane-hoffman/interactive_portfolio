// src/App.jsx
import React from 'react';
import Scene from './components/Scene';

function App() {
  const handleRedClick = () => {
    console.log('Redirect to About page/component');
  };

  const handleGreenClick = () => {
    console.log('Redirect to Portfolio page/component');
  };

  const handleBlueClick = () => {
    console.log('Redirect to Clicker page/component');
  };

  return (
    <div className="App">
      <Scene />
    </div>
  );
}

export default App;

