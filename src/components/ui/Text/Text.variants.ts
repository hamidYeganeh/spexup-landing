import { cva } from "class-variance-authority";
import { TTextSize, TTextWeight } from "./Text.types";

const TEXT_SIZE: Record<TTextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const TEXT_WEIGHT: Record<TTextWeight, string> = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

export const TextVariants = cva("text-foreground font-montserrat", {
  variants: {
    size: TEXT_SIZE,
    weight: TEXT_WEIGHT,
  },
  defaultVariants: {
    size: "md",
    weight: "medium",
  },
});
