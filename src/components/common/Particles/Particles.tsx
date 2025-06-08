"use client";

import { useCallback, useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import ParticlesConfig from "../../../../public/js/particles-config.json";
import { useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

export const SparklesCore = () => {
  const controls = useAnimation();
  const [init, setInit] = useState(false);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="-z-particles absolute inset-0 h-full w-full">
      <Particles
        id={"bg-particle"}
        className={cn("h-full w-full")}
        particlesLoaded={particlesLoaded}
        options={ParticlesConfig as any}
      />
    </div>
  );
};
