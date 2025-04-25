"use client";

import createGlobe from "cobe";
import { MapPinIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export const LocationCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const fadeMask =
    "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 70%)";

  // Motion value to track drag delta, and a spring to smooth it
  const dragDelta = useMotionValue(0);
  const r = useSpring(dragDelta, { mass: 1, stiffness: 280, damping: 40 });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const updateSize = () => {
      const width = canvas.offsetWidth;
      canvas.width = width * 2;
      canvas.height = width * 2;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: canvas.width,
      height: canvas.height,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 2,
      mapSamples: 12000,
      mapBrightness: 2,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [1, 1, 1],
      glowColor: [0.5, 0.5, 0.5],
      markers: [{ location: [23.63, 85.56], size: 0.1 }], // Ramgarh marker
      scale: 1.05,
      onRender: (state) => {
        const width = canvas.offsetWidth;
        state.width = width * 2;
        state.height = width * 2;
        state.phi = 2.75 + r.get();
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", updateSize);
    };
  }, [r]);

  return (
    <div className="relative rounded-xl p-2 flex flex-col gap-6 h-full bg-background">
      {/* Header */}
      <div className="flex items-center gap-2">
        <MapPinIcon className="size-5 text-white" />
        <h2 className="text-[0.6rem] font-medium text-white">
          India, Ramgarh Jharkhand
        </h2>
      </div>

      {/* Globe */}
      <div className="absolute inset-x-0 bottom-[-190px] mx-auto h-[400px] aspect-square max-w-[90vw] md:h-[350px] sm:h-[320px] sm:bottom-[-140px]">
        <div className="w-full h-full flex items-center justify-center overflow-visible">
          <div
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              maxWidth: 800,
              WebkitMaskImage: fadeMask,
              maskImage: fadeMask,
            }}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={(e) => {
                pointerInteracting.current =
                  e.clientX - pointerInteractionMovement.current;
                canvasRef.current!.style.cursor = "grabbing";
              }}
              onPointerUp={() => {
                pointerInteracting.current = null;
                canvasRef.current!.style.cursor = "grab";
              }}
              onPointerOut={() => {
                pointerInteracting.current = null;
                canvasRef.current!.style.cursor = "grab";
              }}
              onMouseMove={(e) => {
                if (pointerInteracting.current !== null) {
                  const delta = e.clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta;
                  dragDelta.set(delta / 200);
                }
              }}
              onTouchMove={(e) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                  const delta =
                    e.touches[0].clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta;
                  dragDelta.set(delta / 100);
                }
              }}
              style={{
                width: "100%",
                height: "100%",
                contain: "layout paint size",
                cursor: "grab",
                userSelect: "none",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
