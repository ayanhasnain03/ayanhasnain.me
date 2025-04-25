import { SiNestjs, SiNextdotjs } from "@icons-pack/react-simple-icons";
import { ConnectBento } from "./connect-bento";
import { FavFrameWork } from "./fav-framework";
import { LocationCard } from "./location-card";
import { StacksCard } from "./stacksCard";

const cardStyles =
  "relative w-full rounded-2xl  text-white p-5 flex flex-col gap-4 " +
  "transition-shadow duration-300 group overflow-hidden border border-white/10 bg-background";

const BentoGrid = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full justify-center mt-8 px-4">
      <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
        <div className={`${cardStyles} md:w-[400px] h-[250px]`}>
          <LocationCard />
        </div>
        <div
          className={`${cardStyles} md:w-[400px] h-[260px] z-[10] bg-[#050505]`}
        >
          <ConnectBento />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
        <div className={`${cardStyles} md:w-[500px] h-[300px]`}>
          <StacksCard />
        </div>
        <div className="flex gap-4 w-full md:w-[500px]">
          <div className={`${cardStyles} w-1/2 h-[210px]`}>
            <FavFrameWork title="Nextjs" icon={SiNextdotjs} />
          </div>
          <div className={`${cardStyles} w-1/2 h-[210px]`}>
            <FavFrameWork title="Nextjs" icon={SiNestjs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
