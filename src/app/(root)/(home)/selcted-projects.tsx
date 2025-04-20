import ProjectCard from "@/components/ProjectCard";
import { SelectedProjects } from "@/constant";

const SelctedProjects = () => {
  return (
    <div className="h-auto gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2 w-full transition-all duration-300">
      {SelectedProjects?.map((elem, idx) => (
        <div key={idx}>
          <ProjectCard
            banner={elem.banner}
            title={elem.title}
            description={elem.description}
            tech={elem.tech}
            github={elem.contact?.github}
            liveDemo={elem.contact?.liveDemo}
          />
        </div>
      ))}
    </div>
  );
};

export default SelctedProjects;
