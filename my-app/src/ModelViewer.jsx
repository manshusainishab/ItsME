import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ModelViewer({ path, onPointerDown }) {
  const group = useRef();
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play all available animations
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play();
      });
    }
  }, [actions]);

  // Optional: rotate entire model slowly
  useFrame(() => {
    group.current.rotation.y += 0.005;
  });

  return (
    <group ref={group} dispose={null} onPointerDown={onPointerDown}>
      <primitive
        object={scene}
        scale={20}
      />
    </group>
  );
}
