// components/BlueCube.jsx
import React from 'react';
import Cube from './Cube';

const BlueCube = ({ handleClick }) => {
  const cubeProps = {
    position: [4, 0, 0],
    color: 'blue',
    handleClick,
  };

  return <Cube {...cubeProps} />;
};

export default BlueCube;
