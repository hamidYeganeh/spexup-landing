"use client";

// lib
import Lenis from "lenis";

export const ScrollSmoother = () => {
  const lenis = new Lenis();
  function raf(time: any) {
    if (typeof window !== "undefined") {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  }

  requestAnimationFrame(raf);
  return <></>;
};
