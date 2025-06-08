"use client";

// components
import { Container } from "@/components/common/Container";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { HeaderLogo } from "./HeaderLogo";
import { AnimatedButton, Button } from "@/components/ui/Button";
import { HeaderNavbar } from "./HeaderNavbar";
import { Fade as Hamburger } from "hamburger-react";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current: number) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  return (
    <AnimatePresence>
      <motion.header className="fixed top-4 z-header w-full">
        <Container>
          <div className="blur-bg flex h-[56px] w-full flex-row items-center justify-between rounded border border-border bg-transparent p-2">
            <HeaderLogo />

            <div className="flex-1" />

            <HeaderNavbar />

            <AnimatedButton containerClassName="max-md:invisible">
              Get Started
            </AnimatedButton>

            <HeaderMenu />
          </div>
        </Container>
      </motion.header>
    </AnimatePresence>
  );
};
