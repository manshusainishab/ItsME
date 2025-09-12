import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Group, AnimationAction } from "three";
import type { PointerEvent } from "react";

interface ModelViewerProps {
  path: string;
  onPointerDown?: () => void;
}

export default function ModelViewer({ path, onPointerDown }: ModelViewerProps) {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);

  const [animate, setAnimate] = useState(false);
  const [scale, setScale] = useState(20);
  const targetScale = 63;
  const targetRotationX = -Math.PI - Math.PI / 2;

  useEffect(() => {
  if (actions) {
    (Object.values(actions) as AnimationAction[]).forEach((action) => {
      action.play();
    });
  }
}, [actions]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;

      if (animate && scale < targetScale) {
        const newScale = scale + (targetScale - scale) * 0.05;
        setScale(newScale);
      }

      if (animate && group.current.rotation.x > targetRotationX) {
        group.current.rotation.x += (targetRotationX - group.current.rotation.x) * 0.05;
      }

      group.current.scale.set(scale, scale, scale);
    }
  });

  const handlePointerDown = (e: PointerEvent) => {
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
