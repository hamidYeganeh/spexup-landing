"use client";

// hooks
import { useScroll } from "framer-motion";
import { useRef } from "react";
// types
import type { FC } from "react";
import type { ITextRevealProps } from "./TextReveal.types";
// utils
import { cn } from "@/lib/utils";
// components
import { TextRevealWord } from "./TextRevealWord";

export const TextReveal: FC<ITextRevealProps> = (props) => {
  const { children } = props;

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = children.split(" ");
  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]")}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "text-black/20 dark:text-white/20 flex flex-wrap p-5 text-2xl font-bold md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <TextRevealWord
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
              >
                {word}
              </TextRevealWord>
            );
          })}
        </p>
      </div>
    </div>
  );
};
