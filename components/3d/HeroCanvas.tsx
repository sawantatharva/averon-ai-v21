"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
  Float,
  ContactShadows,
  AdaptiveDpr,
} from "@react-three/drei";
import HeroModel from "../3d/HeroModel";

/* 3D hero section renderer */
export default function HeroCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 1.5]} /* controlled DPR for GPU stability */
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        {/* Base lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight intensity={1} position={[6, 6, 6]} />

        <Suspense fallback={null}>
          {/* User-driven rotation wrapper */}
          <PresentationControls
            global
            snap
            rotation={[0.1, 0.2, 0]}
            polar={[-Math.PI / 8, Math.PI / 8]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            {/* Subtle floating animation */}
            <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
              <HeroModel scale={2.4} />
            </Float>
          </PresentationControls>

          {/* Grounded soft shadow plate */}
          <ContactShadows
            opacity={0.15}
            scale={15}
            blur={2.2}
            far={10}
            resolution={256}
            frames={1}
            position={[0, -1.2, 0]}
          />

          {/* Minimal HDRI env for reflections */}
          <Environment preset="city" resolution={256} />
        </Suspense>

        {/* Adaptive resolution for low-power devices */}
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}
