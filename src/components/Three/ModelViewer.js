"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useLayoutEffect } from "react";
import * as THREE from "three";

function Head({ mouse }) {
  const ref = useRef();
  const { scene } = useGLTF("/assets/face.glb");

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());

    scene.position.sub(center); // ← centers model
  }, [scene]);

  useFrame(() => {
    if (!ref.current) return;

    // Smooth cursor tracking
    ref.current.rotation.y += (mouse.x * 0.4 - ref.current.rotation.y) * 0.08;
ref.current.rotation.x += (-mouse.y * 0.25 - ref.current.rotation.x) * 0.08;
  });

  return <primitive
  ref={ref}
  object={scene}
  scale={0.6}
//   position={[0, 0, -0.3]}
/>;
}

export default function ModelViewer() {
  const mouse = useRef({ x: 0, y: 0 });
      
  useEffect(() => {
    const handleMouseMove = (e) => {
        mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        mouse.current.x = (touch.clientX / window.innerWidth - 0.5) * 2;
        mouse.current.y = -(touch.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("touchmove", handleTouchMove, { passive: true });


        window.addEventListener("mousemove", handleMouseMove);
       return () => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("touchmove", handleTouchMove);
};
    }, []);

  return (
    <div
      style={{ width: "100%", height: "100%" }}
    >
        <Canvas
        camera={{ position: [0, 0, 13], fov: 25 }}
        gl={{ physicallyCorrectLights: true }}
        >
            {/* Very subtle base light */}
            <ambientLight intensity={0.2} />

            {/* KEY LIGHT — soften & lower intensity */}
            <directionalLight
                position={[3, 2, 5]}
                intensity={0.95}
            />

            {/* WRAP / FILL — lifts hair + shadows */}
            <directionalLight
                position={[-5, 4, 6]}
                intensity={1.5}
            />

            {/* RIM LIGHT — hair outline */}
            <directionalLight
                position={[0, 6, -5]}
                intensity={3}
            />

            <Head mouse={mouse.current} />
        </Canvas>
    </div>
  );
}