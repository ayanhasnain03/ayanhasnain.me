import { LocationCard } from "./location-card";
import { StacksCard } from "./stacksCard";

const cardStyles =
  "relative w-full rounded-2xl bg-[#1a1a1a] text-white p-5 flex flex-col gap-4 " +
  "shadow-[0_0_10px_rgba(192,192,192,0.15)] hover:shadow-[0_0_20px_rgba(192,192,192,0.35)] " +
  "transition-shadow duration-300 group overflow-hidden border border-white/10";

const BentoGrid = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full justify-center mt-8 px-4">
      {/* Left column with two stacked cards */}
      <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
        <div className={`${cardStyles} md:w-[400px] h-[250px]`}>
          <LocationCard />
        </div>
        <div className={`${cardStyles} md:w-[400px] h-[280px]`}>
          <StacksCard />
        </div>
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
        <div className={`${cardStyles} md:w-[500px] h-[320px]`}>
          {/* Content here */}
        </div>
        <div className="flex gap-4 w-full md:w-[500px]">
          <div className={`${cardStyles} w-1/2 h-[200px]`}>Stacks</div>
          <div className={`${cardStyles} w-1/2 h-[200px]`}>Stacks</div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
