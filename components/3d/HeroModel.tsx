"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Group, Mesh } from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

type HeroModelProps = {
  scale?: number;
  colorA?: string;   // base surface tone
  colorB?: string;   // emissive accent tone
};

export default function HeroModel({
  scale = 2.2,
  colorA = "#bbdef2",
  colorB = "#d1aad7",
}: HeroModelProps) {
  const group = useRef<Group>(null!);

  /* GLTF asset (ensure /public/models/brain.glb exists) */
  const { scene } = useGLTF("/models/brain.glb");

  /* Material override pass */
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(colorA),
          emissive: new THREE.Color(colorB),
          emissiveIntensity: 0.25,
          metalness: 0.15,
          roughness: 0.35,
        });

        const mesh = child as Mesh;
        mesh.material = mat;
        mesh.castShadow = false;
        mesh.receiveShadow = false;
      }
    });
  }, [scene, colorA, colorB]);

  /* Idle rotation */
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.2;
  });

  /* Stabilize GLTF scene instance */
  const model = useMemo(() => scene, [scene]);

  return (
    <group ref={group} scale={scale} dispose={null}>
      <primitive object={model} />
    </group>
  );
}

/* Preload to avoid load-time pop-in */
useGLTF.preload("/models/brain.glb");