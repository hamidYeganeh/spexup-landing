// types
import type { Variants } from "framer-motion";

export interface IGradualSpacingProps {
  children: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}
