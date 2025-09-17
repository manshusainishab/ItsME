import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Group, AnimationAction } from "three";
import type { PointerEvent } from "react";

interface ModelViewerProps {
  path: string;
  onPointerDown?: () => void;
  onLoad?: () => void; // new callback when model is loaded
}

export default function ModelViewer({ path, onPointerDown, onLoad }: ModelViewerProps) {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);
  const { loaded } = useProgress(); // track loading progress

  const [animate, setAnimate] = useState(false);
  const [scale, setScale] = useState(20);
  const targetScale = 63;
  const targetRotationX = -Math.PI - Math.PI / 2;

  // Trigger onLoad when GLTF is fully loaded
  useEffect(() => {
    if (loaded === 100) {
      onLoad?.();
    }
  }, [loaded, onLoad]);

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
