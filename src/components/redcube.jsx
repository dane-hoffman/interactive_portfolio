// components/RedCube.jsx
import React from 'react';
import Cube from './Cube';

const RedCube = ({ handleClick }) => {
  const cubeProps = {
    position: [-4, 0, 0],
    color: 'red',
    handleClick,
  };

  return <Cube {...cubeProps} />;
};

export default RedCube;
