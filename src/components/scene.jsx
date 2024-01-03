import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import Cube from './Cube'; // Assuming your Cube component structure

const Scene = () => {
  const [showContent, setShowContent] = useState({
    red: false,
    green: false,
    blue: false,
  });

  const handleCubeClick = (cube) => {
    setShowContent({ ...showContent, [cube]: !showContent[cube] });
  };

  return (
    <Canvas
      style={{ height: '600px' }}
      camera={{ position: [0, 0, 10], fov: 30 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} position={[0, 10, 0]} />
      <directionalLight intensity={0.5} position={[10, 0, 0]} />
      <pointLight intensity={0.5} position={[0, 0, 10]} />

      {/* Red Cube */}
      <Cube
        position={[-4, 0, 0]}
        color="red"
        onClick={() => handleCubeClick('red')}
      />
      {showContent.red && (
        <Html center>
          <div>Red Cube Content</div>
        </Html>
      )}

      {/* Green Cube */}
      <Cube
        position={[0, 0, 0]}
        color="green"
        onClick={() => handleCubeClick('green')}
      />
      {showContent.green && (
        <Html center>
          <div>Green Cube Content</div>
        </Html>
      )}

      {/* Blue Cube */}
      <Cube
        position={[4, 0, 0]}
        color="blue"
        onClick={() => handleCubeClick('blue')}
      />
      {showContent.blue && (
        <Html center>
          <div>Blue Cube Content</div>
        </Html>
      )}
    </Canvas>
  );
};

export default Scene;



