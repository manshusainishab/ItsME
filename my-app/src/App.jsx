import { useGLTF } from '@react-three/drei';

useGLTF.preload('/models/yourModel.glb');

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ModelViewer from "./ModelViewer";
import React, { useEffect, useState } from "react";

export default function App() {
  const [music, setMusic] = useState(false);

  useEffect(() => {
    const audio = new Audio("/sound.mp3");
    const playAudio = () => {
      audio.play().catch((e) => console.warn("Autoplay failed:", e));
    }
    playAudio()
  }, [music]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* 3D Model */}
      <div className="relative z-10 w-full h-full">
        <Canvas camera={{ position: [0, 1, 5] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <ModelViewer onPointerDown={()=> setMusic(true)} path="/models/yourModel.glb" />
          <OrbitControls />
          <Environment preset='night' />
        </Canvas>
      </div>
    </div>
  );
}
