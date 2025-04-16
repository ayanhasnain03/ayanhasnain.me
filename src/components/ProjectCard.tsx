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
    <div className="border rounded-2xl h-full w-full bg-black text-white p-4 relative flex flex-col group shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Live demo icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
        {github && (
          <a
            className="cursor-pointer"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              size={20}
              className="hover:scale-110 transition-transform"
            />
          </a>
        )}
        {liveDemo && (
          <a
            className="cursor-pointer"
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowRight
              size={20}
              className="transform -rotate-45 transition-transform hover:scale-110"
            />
          </a>
        )}
      </div>

      {/* Title and Icon */}
      <h1 className="flex items-center gap-2 text-sm font-semibold z-10 mb-2">
        <Lightbulb size={20} className="text-yellow-400" />
        {title}
      </h1>

      {/* Project Image */}
      <div className="relative w-full h-80 mt-4 rounded-lg overflow-hidden">
        <Image
          src={banner!}
          layout="fill"
          className="object-cover"
          loading="lazy"
          alt={title}
        />
        <div className="flex flex-col p-2 absolute bottom-3 bg-gradient-to-t from-black/80 to-transparent">
          <h1 className="font-bold text-white text-2xl">{title}</h1>
          <p className="text-sm text-gray-200">{description.slice(0, 50)}...</p>
        </div>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
