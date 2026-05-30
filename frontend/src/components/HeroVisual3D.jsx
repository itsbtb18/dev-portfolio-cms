import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const InteractiveCharacter = () => {
  const headRef = useRef();
  const leftPupilRef = useRef();
  const rightPupilRef = useRef();

  useFrame((state) => {
    if (!headRef.current) return;

    // Head tracks mouse movement (yaw & pitch only, no global movement)
    const targetRotY = state.pointer.x * 0.45; // Horizontal turn
    const targetRotX = -state.pointer.y * 0.35; // Vertical tilt

    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      targetRotY,
      0.08
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      targetRotX,
      0.08
    );

    // Pupils track the cursor slightly inside the eyes
    if (leftPupilRef.current && rightPupilRef.current) {
      const pupilTargetX = state.pointer.x * 0.045;
      const pupilTargetY = state.pointer.y * 0.045;

      leftPupilRef.current.position.x = THREE.MathUtils.lerp(
        leftPupilRef.current.position.x,
        -0.24 + pupilTargetX,
        0.12
      );
      leftPupilRef.current.position.y = THREE.MathUtils.lerp(
        leftPupilRef.current.position.y,
        0.45 + pupilTargetY,
        0.12
      );

      rightPupilRef.current.position.x = THREE.MathUtils.lerp(
        rightPupilRef.current.position.x,
        0.24 + pupilTargetX,
        0.12
      );
      rightPupilRef.current.position.y = THREE.MathUtils.lerp(
        rightPupilRef.current.position.y,
        0.45 + pupilTargetY,
        0.12
      );
    }
  });

  return (
    <group position={[0, -0.65, 0]}>
      {/* 1. Shoulders/Tshirt - remains completely static */}
      <mesh position={[0, -2.1, -0.1]}>
        <sphereGeometry args={[1.5, 32, 16]} />
        <meshPhysicalMaterial
          color="#D2D6DC"
          roughness={0.7}
          metalness={0.1}
          clearcoat={0.1}
        />
      </mesh>

      {/* 2. Neck - remains completely static */}
      <mesh position={[0, -1.2, -0.15]}>
        <cylinderGeometry args={[0.38, 0.42, 0.7, 32]} />
        <meshPhysicalMaterial
          color="#E1E3E6"
          roughness={0.5}
          metalness={0.05}
        />
      </mesh>

      {/* 3. Head Group - ONLY this moves with cursor */}
      <group ref={headRef} position={[0, -0.4, 0]}>
        {/* Main Face / Skull Sphere */}
        <mesh position={[0, 0.4, 0]}>
          <sphereGeometry args={[0.85, 32, 32]} />
          <meshPhysicalMaterial
            color="#EAEAEA"
            roughness={0.55}
            metalness={0.05}
          />
        </mesh>

        {/* Eyes (Left and Right) */}
        {/* Left Eye White */}
        <mesh position={[-0.24, 0.45, 0.68]} scale={[1, 1, 0.4]}>
          <sphereGeometry args={[0.16, 32, 32]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.15}
          />
        </mesh>
        {/* Right Eye White */}
        <mesh position={[0.24, 0.45, 0.68]} scale={[1, 1, 0.4]}>
          <sphereGeometry args={[0.16, 32, 32]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.15}
          />
        </mesh>

        {/* Left Pupil (with ref for tracking) */}
        <mesh ref={leftPupilRef} position={[-0.24, 0.45, 0.78]} scale={[1, 1, 0.4]}>
          <sphereGeometry args={[0.075, 16, 16]} />
          <meshPhysicalMaterial
            color="#1F1135"
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
        {/* Right Pupil (with ref for tracking) */}
        <mesh ref={rightPupilRef} position={[0.24, 0.45, 0.78]} scale={[1, 1, 0.4]}>
          <sphereGeometry args={[0.075, 16, 16]} />
          <meshPhysicalMaterial
            color="#1F1135"
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>

        {/* Eyebrows */}
        {/* Left Eyebrow */}
        <mesh position={[-0.25, 0.65, 0.7]} rotation={[0, 0, 0.08]}>
          <boxGeometry args={[0.18, 0.04, 0.04]} />
          <meshPhysicalMaterial color="#1E293B" roughness={0.9} />
        </mesh>
        {/* Right Eyebrow */}
        <mesh position={[0.25, 0.65, 0.7]} rotation={[0, 0, -0.08]}>
          <boxGeometry args={[0.18, 0.04, 0.04]} />
          <meshPhysicalMaterial color="#1E293B" roughness={0.9} />
        </mesh>

        {/* Nose (Stylized cartoon shape) */}
        <mesh position={[0, 0.34, 0.78]} scale={[1, 1.25, 1]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshPhysicalMaterial
            color="#EAEAEA"
            roughness={0.5}
            metalness={0.05}
          />
        </mesh>

        {/* Ears */}
        {/* Left Ear */}
        <mesh position={[-0.86, 0.4, 0]} rotation={[0, 0.1, 0.15]} scale={[1, 1.3, 1]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshPhysicalMaterial
            color="#EAEAEA"
            roughness={0.55}
          />
        </mesh>
        {/* Right Ear */}
        <mesh position={[0.86, 0.4, 0]} rotation={[0, -0.1, -0.15]} scale={[1, 1.3, 1]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshPhysicalMaterial
            color="#EAEAEA"
            roughness={0.55}
          />
        </mesh>

        {/* Smile (Torus geometry rotated to point upwards) */}
        <mesh position={[0, 0.22, 0.78]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.12, 0.016, 8, 24, Math.PI]} />
          <meshPhysicalMaterial color="#1A1A1A" roughness={0.8} />
        </mesh>

        {/* Hair Cap & Sweeping Bangs (Parted to the side) */}
        {/* Hair Cap Base */}
        <mesh position={[0, 0.58, -0.08]} scale={[1.03, 1.03, 0.98]}>
          <sphereGeometry args={[0.85, 32, 16]} />
          <meshPhysicalMaterial
            color="#141414"
            roughness={0.85}
            metalness={0.1}
          />
        </mesh>
        {/* Left Side Hair */}
        <mesh position={[-0.78, 0.6, 0.1]} scale={[0.2, 0.4, 0.3]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshPhysicalMaterial color="#141414" roughness={0.85} />
        </mesh>
        {/* Right Side Hair */}
        <mesh position={[0.78, 0.6, 0.1]} scale={[0.2, 0.4, 0.3]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshPhysicalMaterial color="#141414" roughness={0.85} />
        </mesh>
        {/* Top Sweeping Hair Modules */}
        <mesh position={[-0.3, 1.15, 0.15]} rotation={[0, 0, 0.2]} scale={[0.6, 0.3, 0.6]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshPhysicalMaterial color="#141414" roughness={0.85} />
        </mesh>
        <mesh position={[0.25, 1.18, 0.12]} rotation={[0, 0, -0.15]} scale={[0.7, 0.35, 0.6]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshPhysicalMaterial color="#141414" roughness={0.85} />
        </mesh>
        <mesh position={[-0.1, 1.05, 0.52]} rotation={[0.2, 0.3, 0.1]} scale={[0.45, 0.22, 0.3]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshPhysicalMaterial color="#141414" roughness={0.85} />
        </mesh>
        <mesh position={[0.3, 1.02, 0.5]} rotation={[0.2, -0.2, -0.2]} scale={[0.45, 0.22, 0.3]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshPhysicalMaterial color="#141414" roughness={0.85} />
        </mesh>
      </group>
    </group>
  );
};

const HeroVisual3D = () => {
  return (
    <div className="absolute inset-0 z-10 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        style={{ pointerEvents: "auto" }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          {/* Key lights and fill lights */}
          <directionalLight position={[-4, 3, 4]} intensity={2.0} color="#ffffff" />
          <directionalLight position={[4, 2, 3]} intensity={0.8} color="#e2e8f0" />
          {/* Cyberpunk neon rim lighting */}
          <pointLight position={[3, 1.5, -2]} intensity={3.5} color="#d946ef" />
          <pointLight position={[-3, 1, -2]} intensity={2.0} color="#06b6d4" />
          <InteractiveCharacter />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroVisual3D;
