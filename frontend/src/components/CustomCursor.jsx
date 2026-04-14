import { useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  const [musicOn, setMusicOn] = useState(false);

  const bgMusic = useRef(null);
  const clickSound = useRef(null);

  useEffect(() => {
    bgMusic.current = new Audio("/sounds/bg.mp3");
    bgMusic.current.loop = true;
    bgMusic.current.volume = 0.12;

    clickSound.current = new Audio("/sounds/click.mp3");
    clickSound.current.volume = 0.2;
  }, []);

  // 🎵 MUSIC TOGGLE HANDLER
  const toggleMusic = async () => {
    if (!bgMusic.current) return;

    if (musicOn) {
      bgMusic.current.pause();
      setMusicOn(false);
    } else {
      try {
        await bgMusic.current.play();
        setMusicOn(true);
      } catch (err) {
        console.log("Music blocked:", err);
      }
    }
  };

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      setTimeout(() => {
        setTrail({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const click = () => {
      if (clickSound.current) {
        clickSound.current.currentTime = 0;
        clickSound.current.play();
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", click);
    };
  }, []);

  return (
    <>
      {/* 🔊 MUSIC CONTROL BUTTON */}
      <Box
        onClick={toggleMusic}
        sx={{
          position: "fixed",
          bottom: 20,
          left: 20,
          zIndex: 10001,
          background: musicOn ? "#00ffff" : "#222",
          color: musicOn ? "#000" : "#fff",
          padding: "10px 14px",
          borderRadius: "30px",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: "bold",
          boxShadow: "0 0 15px rgba(0,255,255,0.4)",
          userSelect: "none",
        }}
      >
        {musicOn ? "🔊 MUSIC ON" : "🔇 MUSIC OFF"}
      </Box>

      {/* 🌌 BIG AURA */}
      <Box
        sx={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          transform: `translate(${pos.x - 45}px, ${pos.y - 45}px)`,
          background:
            "radial-gradient(circle, rgba(0,255,255,0.25), transparent 70%)",
          filter: "blur(10px)",
          pointerEvents: "none",
          zIndex: 9998,
          animation: "pulse 3s ease-in-out infinite",
          "@keyframes pulse": {
            "0%": {
              transform: `translate(${pos.x - 45}px, ${pos.y - 45}px) scale(1)`,
            },
            "50%": {
              transform: `translate(${pos.x - 45}px, ${pos.y - 45}px) scale(1.2)`,
            },
            "100%": {
              transform: `translate(${pos.x - 45}px, ${pos.y - 45}px) scale(1)`,
            },
          },
        }}
      />

      {/* 🌊 TRAIL */}
      <Box
        sx={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          transform: `translate(${trail.x - 19}px, ${trail.y - 19}px)`,
          border: "2px solid rgba(0,255,255,0.7)",
          boxShadow: "0 0 15px rgba(0,255,255,0.3)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* 🎯 CORE */}
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
          background: "#00ffff",
          boxShadow: "0 0 20px #00ffff",
          pointerEvents: "none",
          zIndex: 10000,
        }}
      />
    </>
  );
};

export default CustomCursor;