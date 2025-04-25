import { ButtonHover10 } from "@/components/ui/button-hover";
import SpotlightCursor from "@/components/ui/cursor-spotlight";
import { AnimatedTextCycleDemo } from "@/features/components/animated-text-cycle";
import { SelctedProjects } from "@/features/components/selcted-projects";

import { Pin } from "lucide-react";
import BentoGrid from "../components/bento-grid";

export default function Home() {
  return (
    <>
      <div className="home relative text-center flex items-center justify-center min-h-dvh overflow-hidden p-4">
        <div className="-z-10 hidden md:block">
          <SpotlightCursor />
        </div>
        <AnimatedTextCycleDemo />
      </div>

      <div className="selcted-project">
        <div className="flex flex-row items-center gap-2 p-4">
          <Pin className="size-8" />
          <h1 className="text-bold text-white text-2xl">Pinned Projects</h1>
        </div>

        <SelctedProjects />
        <ButtonHover10
          text="Visit GitHub"
          navigate="/projects"
          className="mx-auto cursor-pointer block mt-8"
        />
      </div>

      <div className="">
        <BentoGrid />
      </div>
    </>
  );
}
