import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { TitleVariants } from "./Title.variants";

export type TTitleOrders = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TTitleSize =
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

export type TTitleWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export interface ITitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof TitleVariants> {
  order: TTitleOrders;
}
