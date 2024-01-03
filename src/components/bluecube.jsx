import React from 'react';
import Cube from './cube';

const BlueCube = ({ handleClick }) => {
  const cubeProps = {
    position: [4, 0, 0],
    color: 'blue',
    label: 'BLUE CUBE',
    handleClick,
  };

  return <Cube {...cubeProps} />;
};

export default BlueCube;
