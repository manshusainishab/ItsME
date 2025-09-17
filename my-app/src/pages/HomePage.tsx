import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import ModelViewer from "@/assets/ModelViewer";
import { Suspense, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HomePage() {
  const [music, setMusic] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio(
      "https://uqkqrbzfmr2joipx.public.blob.vercel-storage.com/sound.mp3"
    );
    if (music) audio.play().catch((e) => console.warn("Autoplay failed:", e));
  }, [music]);

  const menuItems = [
    { name: "Projects", path: "/projects", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThuaNuPJU4ysgwxMKJ2Uko_OlnATxFBiSmCk_-tLpwfc6OWhMGjheapms7zDgF2w8kqbY&usqp=CAU" },
    { name: "Education", path: "/education", url: "https://wallpapercave.com/wp/wp13480886.jpg" },
    { name: "Achievements", path: "/achievements", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqVYQLNAVuI0Awhm_hQwL9Xf-0WtP_rrEK83G9tMadDDr-BduHRSWlCDo1FgIzaTaAqo&usqp=CAU" },
    { name: "Certificates", path: "/certificates", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouuTv8XizL4ai2QsEXikLu9jYU0vE6lYGVczlp7PXafqiQvijZmyjfw_QLFl3U8qxgEg&usqp=CAU" },
    { name: "Experience", path: "/experience", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfcXMRwNfWddMtmYBiX2Rcq3lh2xL308uWuyOF9Bb8JK8RDbOEmwtcgVpSWHhBaX_UN0&usqp=CAU" },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Canvas with Suspense for Loader */}
      <Suspense
        fallback={
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-neon-green text-center px-4">
            <h1 className="text-3xl md:text-5xl font-tech font-bold animate-pulse">
              Get ready...
            </h1>
            <p className="text-xl md:text-2xl mt-4 font-tech tracking-wider">
              We are entering a new galaxy
            </p>
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <ModelViewer
            path="https://uqkqrbzfmr2joipx.public.blob.vercel-storage.com/yourModel.glb"
            onPointerDown={() => {
              setMusic(true);
              setTimeout(() => setShowMenu(true), 4000);
            }}
          />
          <Environment preset="night" />
        </Canvas>
      </Suspense>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://uqkqrbzfmr2joipx.public.blob.vercel-storage.com/video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Centered Banner Slider */}
      {showMenu && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 1850, disableOnInteraction: false }}
            loop
            className="w-80 h-80 flex items-center justify-center rounded-full shadow-[0_0_40px_10px_rgba(34,197,94,0.7)] animate-[pulseGlow_2s_infinite]"
          >
            {menuItems.map((item, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div
                  onClick={() => navigate(item.path)}
                  className="relative w-80 h-80 flex items-center justify-center rounded-full overflow-hidden text-white text-lg font-bold bg-gradient-to-r from-green-500/70 to-black/70 hover:from-green-600 hover:to-black/90 transition-all duration-500 cursor-pointer"
                >
                  <img className="object-cover w-full h-full" src={item.url} alt={item.name} />
                  <span className="absolute bottom-4 px-4 py-1 rounded text-sm font-bold tracking-widest text-green-400 uppercase bg-black/40 border border-green-500/40 shadow-[0_0_10px_2px_rgba(34,197,94,0.7)] animate-pulse-glow transform transition-transform duration-300 hover:scale-110">
                    {item.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
