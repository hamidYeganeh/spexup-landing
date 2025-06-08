"use client";

import { cn } from "@/lib/utils";
// types
import { useRef, type FC } from "react";
import type { IMarqueeProps } from "./Marquee.types";
import { useScroll, useTransform, motion } from "framer-motion";

export const Marquee: FC<IMarqueeProps> = (props) => {
  const {
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...otherProps
  } = props;

  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div
      {...otherProps}
      ref={gridRef}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <motion.div
            animate={{}}
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </motion.div>
        ))}
    </div>
  );
};
