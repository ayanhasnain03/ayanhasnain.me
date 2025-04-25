import {
  Activity,
  Component,
  Cpu,
  HomeIcon,
  Package,
  ScrollText,
  User,
} from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import Link from "next/link";

const data = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "About",
    icon: (
      <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#about",
  },
  {
    title: "Skills", // Added Skills section
    icon: (
      <Cpu className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/skills",
  },
  {
    title: "Projects",
    icon: (
      <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/projects",
  },
  {
    title: "Blogs",
    icon: (
      <Activity className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/blogs",
  },
  {
    title: "Resume",
    icon: (
      <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/resume",
  },
  {
    title: "Contacts",
    icon: (
      <User className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#contact",
  },
];

export function AppleStyleDock() {
  return (
    <div className="fixed bottom-5 left-1/2 max-w-full -translate-x-1/2 z-50">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 transition-transform transform hover:scale-110 hover:bg-gray-300 dark:hover:bg-neutral-700"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>
              <Link href={item.href.toLocaleLowerCase()} key={item.href}>
                {item.icon}
              </Link>
            </DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
