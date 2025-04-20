import { AnimatedTextCycleDemo } from "@/components/animated-text-cycle";
import { Button } from "@/components/ui/button";
import SpotlightCursor from "@/components/ui/Spotlight";
import { Pin } from "lucide-react";
import Link from "next/link";
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

      <section className="selcted-project">
        <div className="flex flex-row items-center gap-2 p-4">
          <Pin className="size-8" />
          <h1 className="text-bold text-white text-2xl">Pinned Projects</h1>
        </div>

        <SelctedProjects />
        <Button
          className="block mx-auto my-6 bg-black border border-white"
          variant={"outline"}
        >
          <Link href={"/projects"}>View All!</Link>
        </Button>
      </section>
      <section className=" relative text-center flex items-center justify-center min-h-[90vh] overflow-hidden p-4"></section>
    </>
  );
}
