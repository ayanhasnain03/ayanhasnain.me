"use client";
import { NavLinks } from "@/constant";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <nav className="container flex items-center mx-auto justify-between p-4">
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
        className="flex gap-6 z-10 items-center justify-center"
      >
        {NavLinks.map((elem) => (
          <motion.div
            key={elem.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={elem.route}
              className={`${mLight.className} relative flex flex-col items-center transition-all duration-300 ease-in-out`}
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
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ModeToggle />
      </motion.div>
    </nav>
  );
};

export default Navbar;
