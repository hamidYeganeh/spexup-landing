import { Variant } from "framer-motion";
import { TBoxRevealDirections } from "./BoxReveal.types";

export const BoxRevealVariants: Record<
  TBoxRevealDirections,
  { hidden: Variant; visible: Variant }
> = {
  toRight: {
    hidden: { left: 0 },
    visible: { left: "100%" },
  },
  toLeft: {
    hidden: { right: 0 },
    visible: { right: "100%" },
  },
  toDown: {
    hidden: { top: 0 },
    visible: { top: "100%" },
  },
  toUp: {
    hidden: { bottom: 0 },
    visible: { bottom: "100%" },
  },
};
