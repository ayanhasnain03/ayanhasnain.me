"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLinks } from "@/constant";
import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useCallback, useMemo, useState } from "react";
import { ModeToggle } from "../ModeToggle";
const myFont = localFont({
  src: "../../../fonts/astelafisa.otf",
  display: "swap",
});
const mLight = localFont({
  src: "../../../fonts/m-light.ttf",
  display: "swap",
});

const Navbar = () => {
  const currentPath = usePathname();
  const [isToggle, setIsToggle] = useState(false);

  const toggle = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  const navItems = useMemo(
    () =>
      NavLinks.map((elem) => (
        <motion.div
          key={elem.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={elem.route}
            className={`${mLight.className} relative flex flex-col items-center transition-all duration-300 ease-in-out z-50`}
          >
            {elem.text}
            {currentPath === elem.route && (
              <motion.div
                className="h-1 w-3 bg-black dark:bg-white rounded-full mt-1 absolute -bottom-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
          </Link>
        </motion.div>
      )),
    [currentPath]
  );

  return (
    <nav className="container flex items-center mx-auto justify-between p-4 z-50">
      <motion.div
        className={`${myFont.className} text-3xl`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Ayan Hasnain
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex gap-6 z-10 items-center justify-center"
      >
        {navItems}
      </motion.div>

      <motion.div
        className="flex gap-4 items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ModeToggle />

        <DropdownMenu open={isToggle} onOpenChange={setIsToggle}>
          <DropdownMenuTrigger asChild>
            <button
              onClick={toggle}
              className="z-50 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 md:hidden"
            >
              <MenuIcon />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {NavLinks.map((elem) => (
              <DropdownMenuItem key={elem.route}>
                <Link href={elem.route} key={elem.route}>
                  {elem.text}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </nav>
  );
};

export default memo(Navbar);
