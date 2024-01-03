import React from 'react';
import Cube from './cube';

const GreenCube = ({ handleClick }) => {
  const cubeProps = {
    position: [0, 0, 0],
    color: 'green',
    label: 'GREEN CUBE',
    handleClick,
  };

  return <Cube {...cubeProps} />;
};

export default GreenCube;

