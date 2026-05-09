"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={2}
        floatingRange={[-0.5, 0.5]}
      >
        <Sphere args={[1.5, 64, 64]} scale={1.2}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Environment preset="city" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
