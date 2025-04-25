import { SOCIAL_CONNECT } from "@/constant";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
interface SocialConnect {
  id: number;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
}
export const ConnectBento = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex glex-row gap-2 items-center">
        <LinkIcon className="text-xl" />
        <h1 className="text-xl font-semibold">Connect</h1>
      </div>

      <div className="mt-3">
        {SOCIAL_CONNECT.map(({ id, name, icon: Icon, href }: SocialConnect) => (
          <div key={id} className="flex flex-col  gap-y-4 p-1.5">
            <Link
              href={href}
              target="_blank"
              className="flex flex-row gap-2 items-center"
            >
              <Icon />
              <h2 className="text-sm font-medium">{name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
