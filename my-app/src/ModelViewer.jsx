import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ModelViewer({ path, onPointerDown }) {
  const group = useRef();
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);

  const [animate, setAnimate] = useState(false);
  const [scale, setScale] = useState(20);
  const targetScale = 60;
  const targetRotationX = -Math.PI -(Math.PI/2); // 90 degrees upwards

  useEffect(() => {
    // Play all available animations
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play();
      });
    }
  }, [actions]);

  useFrame(() => {
    if (group.current) {
      // Continuous slow Y-axis rotation
      group.current.rotation.y += 0.005;

      // Smoothly scale up
      if (animate && scale < targetScale) {
        const newScale = scale + (targetScale - scale) * 0.05;
        setScale(newScale);
      }

      // Smoothly rotate X-axis to top view
      if (animate && group.current.rotation.x > targetRotationX) {
        group.current.rotation.x += (targetRotationX - group.current.rotation.x) * 0.05;
      }

      // Apply the updated scale
      group.current.scale.set(scale, scale, scale);
    }
  });

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setAnimate(true);
    onPointerDown?.();
  };

  return (
    <group ref={group} dispose={null} onPointerDown={handlePointerDown}>
      <primitive object={scene} />
    </group>
  );
}
