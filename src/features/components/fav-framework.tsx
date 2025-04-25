import { Heart } from "lucide-react";
import React from "react";

interface FavFrameWorkProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
}

export const FavFrameWork = ({ icon: Icon, title }: FavFrameWorkProps) => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Heart className="size-4 absolute left-2 top-1"/>
      <Icon className="size-32" /> <h3 className="text-sm mt-2">{title}</h3>
    </div>
  );
};
