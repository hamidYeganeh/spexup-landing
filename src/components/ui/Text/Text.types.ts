// lib
import { VariantProps } from "class-variance-authority";
// types
import type { HTMLAttributes } from "react";
// config
import { TextVariants } from "./Text.variants";

export type TTextSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type TTextWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export interface ITextProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof TextVariants> {}
