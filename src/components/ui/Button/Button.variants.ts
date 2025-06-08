// lib
import { cva } from "class-variance-authority";
// types
import type { TButtonSizes, TButtonVariants } from "./Button.types";

const BUTTON_VAIRANTS: Record<TButtonVariants, string> = {
  contained: "bg-primary text-primary-foreground hover:bg-primary-dark",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  link: "bg-transparent text-primary hover:bg-primary-light",
  outlined:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  standard:
    "bg-white text-primary-dark hover:bg-primary hover:text-white transition-all ",
  ghosted: "bg-transparent text-foreground hover:bg-primary-dark",
};
const BUTTON_SIZES: Record<TButtonSizes, string> = {
  sm: "h-9 rounded px-3",
  md: "h-10 px-4 py-2",
  lg: "h-11 rounded px-8",
  icon: "h-10 w-10 flex items-center justify-center",
};

export const ButtonVariants = cva(
  "inline-flex text-foreground items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: BUTTON_VAIRANTS,
      size: BUTTON_SIZES,
    },
    defaultVariants: {
      variant: "contained",
      size: "md",
    },
  },
);
