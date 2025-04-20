import { ArrowRight, Github, Lightbulb } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  banner?: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  liveDemo?: string;
}

const ProjectCard = ({
  banner,
  title,
  description,
  tech,
  github,
  liveDemo,
}: ProjectCardProps) => {
  return (
    <div className="relative w-full h-full rounded-2xl bg-[#1a1a1a] text-white p-5 flex flex-col gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 group overflow-hidden border border-white/10">
      {liveDemo && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-white text-black rounded-full p-2 hover:scale-110 transform"
        >
          <ArrowRight size={20} className="-rotate-45" />
        </a>
      )}

      <div className="flex items-center gap-2 text-sm font-semibold z-10">
        <Lightbulb size={18} className="text-yellow-400" />
        <span className="text-gray-100 tracking-wide">{title}</span>
      </div>

      <div className="relative w-full h-56 rounded-xl overflow-hidden">
        {banner ? (
          <Image
            src={banner}
            alt={title}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
          <h2 className="text-base font-bold">{title}</h2>
          <p className="text-xs text-gray-300 mt-1">
            {description.length > 60
              ? description.slice(0, 60) + "..."
              : description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 z-10">
        {tech.map((item, i) => (
          <span
            key={i}
            className="bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a]
              text-gray-200 text-xs font-medium px-4 py-1.5 rounded-full
              border border-white/10
              shadow-[0_0_8px_rgba(255,255,255,0.04)]
              hover:shadow-[0_0_14px_rgba(255,255,255,0.2)]
              hover:scale-105 transition-all duration-300 ease-in-out
              backdrop-blur-sm "
          >
            {item}
          </span>
        ))}
      </div>

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-20 text-white hover:scale-110 transition-transform"
        >
          <Github size={20} />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
