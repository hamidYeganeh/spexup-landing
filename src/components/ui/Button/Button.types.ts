import { VariantProps } from "class-variance-authority";
import { ButtonVariants } from "./Button.variants";
import {
  ButtonHTMLAttributes,
  ElementType,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

export type TButtonVariants =
  | "contained"
  | "secondary"
  | "outlined"
  | "link"
  | "ghosted"
  | "standard";

export type TButtonSizes = "lg" | "md" | "sm" | "icon";

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  asChild?: boolean;
}

export interface IAnimatedButtonProps
  extends PropsWithChildren<
    {
      as?: ElementType;
      containerClassName?: string;
      className?: string;
      duration?: number;
      clockwise?: boolean;
    } & HTMLAttributes<HTMLElement>
  > {}
