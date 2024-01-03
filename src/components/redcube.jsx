import React from 'react';
import Cube from './cube';

const RedCube = ({ handleClick }) => {
  const cubeProps = {
    position: [-4, 0, 0],
    color: 'red',
    label: 'RED CUBE',
    handleClick,
  };

  return <Cube {...cubeProps} />;
};

export default RedCube;
