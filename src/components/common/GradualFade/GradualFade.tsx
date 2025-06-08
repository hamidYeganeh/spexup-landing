"use client";

// lib
import { AnimatePresence, motion } from "framer-motion";
// utils
import { cn } from "@/lib/utils";
// types
import type { FC } from "react";
import type { IGradualSpacingProps } from "./GradualFade.types";

export const GradualSpacing: FC<IGradualSpacingProps> = (props) => {
  const {
    children,
    duration = 0.5,
    delayMultiple = 0.04,
    framerProps = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    className,
  } = props;
  return (
    <div className="flex justify-center space-x-1">
      <AnimatePresence>
        {children.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("drop-shadow-sm", className)}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
};
