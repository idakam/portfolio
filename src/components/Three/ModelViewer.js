import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
    <Canvas
      colormanagement="true"
      shadowmap="true"
      camera={{ position: [0, 0, 2], fov: 60 }}
    >
      {/* <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} /> */}
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={(-8, 16, -8)}
        intensity={0.4}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[20, 50, 0]} intensity={3} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        {/* <OrbitControls /> */}
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
