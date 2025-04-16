import { AnimatedTextCycleDemo } from "@/components/animated-text-cycle";
import SpotlightCursor from "@/components/ui/Spotlight";
import SelctedProjects from "./selcted-projects";

export default function Home() {
  return (
    <>
      <section className="home relative text-center flex items-center justify-center min-h-[90vh] overflow-hidden p-4">
        <div className="-z-30 hidden md:block">
          <SpotlightCursor />
        </div>
        <AnimatedTextCycleDemo />
      </section>
      <section className="selcted-project h-screen">
        <SelctedProjects />
      </section>
    </>
  );
}
