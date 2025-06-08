"use client";

// components
import { Box } from "@/components/common/Box";
import { TextRevealWord } from "@/components/common/TextReveal";
import { HeroInput } from "@/components/ui/Input";
import { Container } from "@/components/common/Container";
import { MotionInView, fade } from "@/components/common/Animation";
// lib
import { cn } from "@/lib/utils";
import Image from "next/image";
// hooks
import { AnimatePresence, useScroll } from "framer-motion";
import { useRef } from "react";

export const HomePageHeroBox = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: boxRef,
  });

  const words = [
    "Full-Service",
    "Digitalization.Customizedand",
    "Turnkey solutions.",
    "Consulting and \nsoftware",
    "Development",
  ];

  return (
    <AnimatePresence mode="wait">
      <div className="relative w-full">
        <div className="relative h-[400px] w-full max-w-[var(--container)] pt-4 max-md:h-[240px] max-md:pt-0">
          <div
            className={cn(
              "max-h-[907px] max-w-[1328px] px-12",
              "max-md:max-h-[450px] max-md:overflow-hidden max-md:px-0",
            )}
          >
            <div
              className={cn(
                "absolute inset-0 top-52 z-10 mx-auto max-w-sm",
                "max-md:top-36",
              )}
            >
              <HeroInput />
            </div>

            <MotionInView variants={fade().inUp}>
              <div className="relative max-h-[450px] overflow-hidden">
                <Image
                  src={"/images/globe/spex-planet.png"}
                  alt="Spex planet"
                  width={1328}
                  height={907}
                  className={
                    "h-auto w-full max-md:translate-y-16 max-md:scale-150"
                  }
                  priority
                  quality={100}
                />
                <div className="bg-dark-gradient absolute bottom-0 mx-auto h-16 w-full max-md:h-24"></div>
              </div>
            </MotionInView>
          </div>
        </div>
        <Container className="h-fit max-w-full max-md:max-w-[var(--container)]">
          <div
            ref={boxRef}
            className="relative z-0 h-[1300px] w-full opacity-100 max-md:bottom-6 max-md:h-[130vh]"
          >
            <div
              className={
                "sticky top-14 mx-auto flex w-full items-center bg-transparent py-12"
              }
            >
              <Box className="h-full max-md:py-8" highlightClassName="px-8">
                <p
                  ref={boxRef}
                  className={cn(
                    "whites-space-normal max-md:white-space-pre flex flex-col gap-8 capitalize max-md:gap-6",
                  )}
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
              </Box>
            </div>
          </div>
        </Container>
      </div>
    </AnimatePresence>
  );
};
