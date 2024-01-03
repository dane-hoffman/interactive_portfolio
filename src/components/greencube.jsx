// components/GreenCube.jsx
import React from 'react';
import Cube from './Cube';

const GreenCube = ({ handleClick }) => {
  const cubeProps = {
    position: [0, 0, 0],
    color: 'green',
    handleClick,
  };

  return <Cube {...cubeProps} />;
};

export default GreenCube;

