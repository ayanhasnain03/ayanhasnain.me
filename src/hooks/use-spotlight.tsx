"use client";

import { useEffect, useRef } from "react";

interface SpotlightConfig {
  spotlightSize?: number;
  spotlightIntensity?: number;
  fadeSpeed?: number;
  glowColor?: string;
  pulseSpeed?: number;
}

const useSpotlightEffect = (config: SpotlightConfig = {}) => {
  const {
    spotlightSize = 700,
    spotlightIntensity = 1.5,
    fadeSpeed = 0.1,
    glowColor = "135, 206, 235",
    pulseSpeed = 2000,
  } = config;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const spotlightPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const render = () => {
      if (!canvas || !ctxRef.current) return;
      const ctx = ctxRef.current;

      spotlightPos.current.x = lerp(
        spotlightPos.current.x,
        targetPos.current.x,
        fadeSpeed
      );
      spotlightPos.current.y = lerp(
        spotlightPos.current.y,
        targetPos.current.y,
        fadeSpeed
      );

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background overlay
      ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Pulse
      const pulseScale =
        1 + 0.1 * Math.sin((Date.now() / pulseSpeed) * Math.PI * 2);
      const currentSize = spotlightSize * pulseScale;

      // Spotlight gradient
      const gradient = ctx.createRadialGradient(
        spotlightPos.current.x,
        spotlightPos.current.y,
        0,
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSize
      );
      gradient.addColorStop(0, `rgba(${glowColor}, ${spotlightIntensity})`);
      gradient.addColorStop(
        0.5,
        `rgba(${glowColor}, ${spotlightIntensity * 0.5})`
      );
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      // Apply spotlight
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSize,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Glow effect
      ctx.globalCompositeOperation = "source-over";
      const glowGradient = ctx.createRadialGradient(
        spotlightPos.current.x,
        spotlightPos.current.y,
        0,
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSize * 1.2
      );
      glowGradient.addColorStop(0, `rgba(${glowColor}, 0.2)`);
      glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(
        spotlightPos.current.x,
        spotlightPos.current.y,
        currentSize * 1.2,
        0,
        Math.PI * 2
      );
      ctx.fill();

      animationFrame.current = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("mousemove", handleMouseMove);

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [spotlightSize, spotlightIntensity, fadeSpeed, glowColor, pulseSpeed]);

  return canvasRef;
};

export default useSpotlightEffect;
