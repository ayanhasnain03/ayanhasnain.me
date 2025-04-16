import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constant";

const SelctedProjects = () => {
  return (
    <div className="h-[450px] gap-8 overflow-hidden grid grid-cols-1 md:grid-cols-2 w-full">
      {Projects?.map((elem, idx) => (
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
