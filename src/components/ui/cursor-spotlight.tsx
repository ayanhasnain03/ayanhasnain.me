"use client";
import useSpotlightEffect from "@/hooks/use-spotlight";
import { HTMLAttributes } from "react";

// Define an interface for the spotlight configuration
interface SpotlightConfig {
  radius?: number;
  brightness?: number;
  color?: string;
  smoothing?: number;
}

// Combine props with potential HTML canvas attributes
interface SpotlightCursorProps extends HTMLAttributes<HTMLCanvasElement> {
  config?: SpotlightConfig;
}

const SpotlightCursor = ({
  config = {},
  className,
  ...rest
}: SpotlightCursorProps) => {
  // Map the external config to the internal config expected by useSpotlightEffect
  const spotlightConfig = {
    spotlightSize: config.radius ? config.radius * 100 : 800, // scale radius
    spotlightIntensity: config.brightness ?? 1.5,
    glowColor:
      config.color?.replace("rgb(", "").replace(")", "") ?? "135, 206, 235",
    fadeSpeed: config.smoothing ?? 0.1,
  };

  const canvasRef = useSpotlightEffect(spotlightConfig);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] w-full h-full ${
        className || ""
      }`}
      {...rest}
    />
  );
};

export default SpotlightCursor;
