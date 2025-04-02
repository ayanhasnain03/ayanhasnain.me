const Spotlight = () => {
  return (
    <div className={`absolute opacity-0 dark:opacity-100 `}>
      <div className=" h-[380px] -z-10 w-[380px] md:h-[600px] md:w-[600px]  rounded-full bg-[radial-gradient(circle,_hsl(151.03_54.72%_41.57%)_0%,_hsl(151.89_56.35%_38.63%)_40%,_hsl(153.67_59.76%_32.16%)_70%,_hsl(155.29_40.48%_16.47%)_100%)] blur-[200px] opacity-80"></div>
    </div>
  );
};

export default Spotlight;
