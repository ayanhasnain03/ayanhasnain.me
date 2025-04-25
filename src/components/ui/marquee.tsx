import { cn } from "@/lib/utils";
import * as React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  reverse?: boolean;
  speed?: number;
  gap?: string;
  fade?: boolean;
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  reverse = false,
  speed = 30,
  gap = "1rem",
  fade = false,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("w-full overflow-hidden relative", className)}
      {...props}
    >
      <div className="relative flex max-w-[90vw] overflow-hidden py-5">
        <div
          className={cn(
            "flex w-max animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            (reverse || direction === "right") && "animate-marquee-reverse"
          )}
          style={
            {
              "--duration": `${speed}s`,
              gap,
            } as React.CSSProperties
          }
        >
          <div className="flex items-center" style={{ gap }}>
            {children}
          </div>
          <div className="flex items-center" style={{ gap }}>
            {children}
          </div>
        </div>
      </div>

      {fade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-black z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-black z-20" />
        </>
      )}
    </div>
  );
}
