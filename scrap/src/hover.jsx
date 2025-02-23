import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];

  const rotateDirection = (currentDirection) => {
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: "radial-gradient(40% 80% at 50% 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(35% 70% at 0% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM: "radial-gradient(40% 80% at 50% 100%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT: "radial-gradient(35% 70% at 100% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(100% 250% at 50% 50%, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0) 100%)"; // Stronger red

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center bg-black/30 hover:bg-black/40 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      style={{
        boxShadow: hovered ? "0 0 30px rgba(255, 0, 0, 0.8)" : "none", // Glowing effect
      }}
      {...props}
    >
      <div className={cn("w-auto text-white z-10 bg-black px-15 py-2 rounded-[inherit] font-bold backdrop-blur-md", className)}>
        {children}
      </div>
      <motion.div
        className="absolute inset-0 overflow-hidden z-0 rounded-[inherit] "
        style={{
          filter: "blur(6px)", // Increased blur for a glow effect
          opacity: hovered ? 1 : 0.8, // Increase intensity on hover
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute inset-[2px] z-1 rounded-[100px]" />
    </Tag>
  );
}
