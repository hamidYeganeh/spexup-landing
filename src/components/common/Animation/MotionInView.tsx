"use client";

import {
  useAnimation,
  useInView,
  motion,
  Variants,
} from "framer-motion";
import { FC, PropsWithChildren, useEffect, useRef } from "react";

interface IMotionInViewProps {
  variants: Variants;
}
export const MotionInView: FC<PropsWithChildren<IMotionInViewProps>> = (
  props,
) => {
  const { variants, children } = props;

  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!variants) return;
    if (isInView) {
      control.start(Object.keys(variants)[1]);
    } else {
      control.start(Object.keys(variants)[0]);
    }
  }, [control, isInView, variants]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={variants ? Object.keys(variants)[0] : false}
      animate={control}
      transition={{ type: "spring", duration: 2 }}
    >
      {children}
    </motion.div>
  );
};
