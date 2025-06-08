"use client";

// types
import type { FC } from "react";
import type { ITextRevealWordProps } from "./TextReveal.types";
// lib
import { motion, useTransform } from "framer-motion";
import { Title } from "@/components/ui/Title";
import { cn } from "@/lib/utils";
import { TitleVariants } from "@/components/ui/Title/Title.variants";

export const TextRevealWord: FC<ITextRevealWordProps> = ({
  children,
  progress,
  range,
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={cn('white-space-inherit',TitleVariants({ order: "h2" }))}>
      <span className={"absolute opacity-15"}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={"gradient-text"}>
        {children}
      </motion.span>
    </span>
  );
};
