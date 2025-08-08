// components/SpiralBackground.jsx
import React, { useRef, useEffect } from "react";

const SpiralBackground = ({
  lineColor = "rgba(255,255,255,0.06)",
  bgOpacity = 0.02,
  speed = 0.6, // rotation speed multiplier
}) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let raf;
    let t = 0;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // subtle dark overlay so lines are soft
      ctx.fillStyle = `rgba(0,0,0,${bgOpacity})`;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(t * 0.0005 * speed);

      const rings = 180;
      for (let i = 0; i < rings; i++) {
        const progress = i / rings;
        const angle = progress * Math.PI * 8 + t * 0.0004 * speed; // winding
        const radius = progress * Math.min(width, height) * 0.55;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.arc(x, y, 0.6 + (1 - progress) * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.02 + (1 - progress) * 0.06})`;
        ctx.fill();
      }

      ctx.restore();

      t++;
      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [lineColor, bgOpacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default SpiralBackground;
