import Link from "next/link";

export const ButtonHover10 = ({
  text,
  navigate,
  className,
}: {
  text: string;
  navigate?: string | undefined;
  className?: string;
}) => {
  return (
    <Link href={`${navigate?.toLowerCase().toString()}`}>
      <button
        className={`group relative h-12 rounded-full border-1 border-gray-400 bg-background px-5 text-neutral-800 dark:text-white hover:shadow-md transition-shadow duration-300 ease-in-out ${className}`}
      >
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
            {text}
          </div>
          <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {text}
          </div>
        </span>
      </button>
    </Link>
  );
};
