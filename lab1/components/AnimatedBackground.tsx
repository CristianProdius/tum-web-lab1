"use client";
import React, { useState, useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

interface BulletProps {
  onExplode: () => void;
}

function Bullet({ onExplode }: BulletProps) {
  const bulletRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (bulletRef.current) {
      bulletRef.current.position.z += delta * 40;
      if (bulletRef.current.position.z >= 0) {
        onExplode();
      }
    }
  });

  return (
    <mesh ref={bulletRef} position={[0, 0, -20]}>
      <cylinderGeometry args={[0.2, 0.2, 4, 12]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

function Confetti() {
  const numConfetti = 100;
  const confettiArray = useMemo(() => {
    return new Array(numConfetti).fill(null).map(() => ({
      position: [0, 0, 0] as [number, number, number],
      velocity: [
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
      ],
    }));
  }, [numConfetti]);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child) => {
        const vel = child.userData.velocity;
        child.position.x += vel[0] * delta;
        child.position.y += vel[1] * delta;
        child.position.z += vel[2] * delta;
        child.userData.velocity[1] -= 9.81 * delta * 0.5;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {confettiArray.map((item, index) => (
        <mesh
          key={index}
          position={item.position}
          userData={{ velocity: item.velocity }}
        >
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial
            color={
              ["#FFDC00", "#FF4136", "#2ECC40", "#0074D9"][
                Math.floor(Math.random() * 4)
              ]
            }
          />
        </mesh>
      ))}
    </group>
  );
}

export default function AnimatedBulletConfetti() {
  const [exploded, setExploded] = useState(false);

  const handleExplode = () => {
    setExploded(true);
  };

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {!exploded && <Bullet onExplode={handleExplode} />}
      {exploded && <Confetti />}
    </Canvas>
  );
}
