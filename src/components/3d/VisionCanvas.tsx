"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Box, Cylinder } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RobotArm() {
  const group = useRef<THREE.Group>(null);
  const arm1 = useRef<THREE.Mesh>(null);
  const arm2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(time * 0.5) * 0.5;
    }
    if (arm1.current) {
      arm1.current.rotation.z = Math.sin(time) * 0.3 + 0.3;
    }
    if (arm2.current) {
      arm2.current.rotation.z = Math.cos(time * 1.5) * 0.4 - 0.5;
    }
  });

  return (
    <group ref={group} position={[0, -1, 0]}>
      {/* Base */}
      <Cylinder args={[0.8, 1, 0.5, 32]} position={[0, 0.25, 0]}>
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
      </Cylinder>

      {/* Pillar */}
      <Cylinder args={[0.3, 0.4, 1.5, 32]} position={[0, 1.25, 0]}>
        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.1} />
      </Cylinder>

      {/* Joint 1 */}
      <group position={[0, 2, 0]}>
        <Sphere args={[0.4, 32, 32]}>
          <meshStandardMaterial color="#3b82f6" />
        </Sphere>

        {/* Arm 1 */}
        <group ref={arm1}>
          <Box args={[0.3, 2, 0.3]} position={[0, 1, 0]}>
            <meshStandardMaterial color="#e2e8f0" metalness={0.7} roughness={0.2} />
          </Box>

          {/* Joint 2 */}
          <group position={[0, 2, 0]}>
            <Sphere args={[0.3, 32, 32]}>
              <meshStandardMaterial color="#3b82f6" />
            </Sphere>

            {/* Arm 2 */}
            <group ref={arm2}>
              <Box args={[0.2, 1.5, 0.2]} position={[0, 0.75, 0]}>
                <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
              </Box>

              {/* Nozzle/Printer Head */}
              <group position={[0, 1.5, 0]}>
                <Cylinder args={[0.2, 0.05, 0.4, 32]} position={[0, 0.2, 0]}>
                  <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.1} />
                </Cylinder>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function Sphere({ args, children }: any) {
    return (
        <mesh>
            <sphereGeometry args={args} />
            {children}
        </mesh>
    )
}

export default function VisionCanvas() {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <RobotArm />

      {/* Platform */}
      <Box args={[4, 0.1, 4]} position={[0, -1.05, 0]}>
         <meshStandardMaterial color="#e2e8f0" />
      </Box>

      {/* Printed material */}
      <Box args={[1.5, 0.5, 1.5]} position={[1, -0.8, 0]}>
        <meshStandardMaterial color="#64748b" roughness={0.9} />
      </Box>

      <Environment preset="studio" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
