// lib
import { cva } from "class-variance-authority";
// types
import type { TTitleOrders, TTitleSize, TTitleWeight } from "./Title.types";

const TITLE_ORDERS: Record<TTitleOrders, string> = {
  h1: "text-5xl font-extrabold max-sm:text-2xl",
  h2: "text-4xl font-bold max-sm:text-lg",
  h3: "text-3xl font-semibold",
  h4: "text-2xl font-semibold",
  h5: "text-xl font-medium",
  h6: "text-lg font-medium",
};
const TITLE_SIZE: Record<TTitleSize, string> = {
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

const TITLE_WEIGHT: Record<TTitleWeight, string> = {
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

export const TitleVariants = cva("text-foreground capitalize font-neon", {
  variants: {
    order: TITLE_ORDERS,
    size: TITLE_SIZE,
    weight: TITLE_WEIGHT,
  },
  defaultVariants: { order: "h1" },
});
