import React from 'react';
import { Canvas } from '@react-three/fiber';
import RedCube from './redcube.jsx'; // Import RedCube component
import GreenCube from './greencube.jsx'; // Import GreenCube component
import BlueCube from './bluecube.jsx'; // Import BlueCube component

const Scene = () => {
  return (
    <Canvas
      style={{ height: '600px' }}
      camera={{ position: [0, 0, 10], fov: 30 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} position={[0, 10, 0]} />
      <directionalLight intensity={0.5} position={[10, 0, 0]} />
      <pointLight intensity={0.5} position={[0, 0, 10]} />

      {/* Render individual Cube components */}
      <RedCube />
      <GreenCube />
      <BlueCube />
    </Canvas>
  );
};

export default Scene;


