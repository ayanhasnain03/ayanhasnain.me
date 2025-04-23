"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

// Predefined set of gradients to cycle through
const gradients = [
  "linear-gradient(90deg, #FF007F 0%, #FF8C00 100%)",
  "linear-gradient(90deg, #15CBF4 0%, #42E915 100%)",
  "linear-gradient(90deg, #E5E5E5 0%, #9C27B0 100%)",
  "linear-gradient(90deg, #FFC300 0%, #FF5733 100%)",
  "linear-gradient(90deg, #6A0DAD 0%, #FFD700 100%)",
];

export default function AnimatedTextCycle({
  words,
  interval = 3000,
  className = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState("auto");
  const [gradient, setGradient] = useState(gradients[0]);
  const measureRef = useRef<HTMLDivElement>(null);

  // Get the width of the current word
  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children;
      if (elements.length > currentIndex) {
        // Add a small buffer (10px) to prevent text wrapping
        const newWidth = elements[currentIndex].getBoundingClientRect().width;
        setWidth(`${newWidth}px`);
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      setGradient(gradients[(currentIndex + 1) % gradients.length]); // Cycle through gradients
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length, currentIndex]);

  // Container animation for the whole word
  const containerVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      {/* Hidden measurement div with all words rendered */}
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span key={i} className={`font-bold ${className}`}>
            {word}
          </span>
        ))}
      </div>

      {/* Visible animated word */}
      <motion.span
        className="relative inline-block"
        animate={{
          width,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 1.2,
          },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={`inline-block font-bold ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              whiteSpace: "nowrap",
              backgroundImage: gradient,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
}
