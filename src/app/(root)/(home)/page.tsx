import { AnimatedTextCycleDemo } from "@/components/animated-text-cycle";
import { ButtonHover10 } from "@/components/ui/button-hover";
import SpotlightCursor from "@/components/ui/Spotlight";
import { SpotlightPhone } from "@/components/ui/spotlight-phone";
import { Pin } from "lucide-react";
import SelctedProjects from "./selcted-projects";

export default function Home() {
  return (
    <>
      <SpotlightPhone />

      <section className="home relative text-center flex items-center justify-center min-h-dvh overflow-hidden p-4">
        <div className="-z-30 hidden md:block">
          <SpotlightCursor />
        </div>
        <AnimatedTextCycleDemo />
      </section>

      <section className="selcted-project">
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
      </section>
      <section className=" relative text-center flex items-center justify-center min-h-[90vh] overflow-hidden p-4"></section>
    </>
  );
}
