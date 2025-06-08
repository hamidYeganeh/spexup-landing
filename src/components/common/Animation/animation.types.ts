// types
import type { Variants } from "framer-motion";

export interface ITransitionProps {
  distance?: number;
  duration?: number;
  durationIn?: number;
  durationOut?: number;
  ease?: number[];
  easeIn?: number[];
  easeOut?: number[];
}

export type TVariant<T> = (props?: T) => Record<string, Variants>;
