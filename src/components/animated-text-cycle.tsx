"use client";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

export function AnimatedTextCycleDemo() {
  return (
    <div className="w-full font-bold z-10 text-white">
      <h1 className="text-4xl text-left leading-snug">
        <span>I’m Ayan, a Software Engineer</span>
        <br />
        <span>building </span>
        <AnimatedTextCycle
          words={[
            "Attractive",
            "Innovative",
            "Responsive",
            "Interactive",
            "Engaging",
            "Scalable",
          ]}
          interval={3000}
        />{" "}
        <span>websites using</span> <strong>Next.js</strong>.
      </h1>

      <p className="mt-4 text-left text-lg font-medium text-gray-300">
        India • UTC/GMT +5:30
      </p>
    </div>
  );
}
