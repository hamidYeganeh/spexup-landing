// lib
import { cva } from "class-variance-authority";
// types
import type { TInputSizes, TInputVariants } from "./Input.types";

const INPUT_VARIANTS: Record<TInputVariants, string> = {
  outlined:
    "border border-input bg-primary-light ring-offset-white placeholder:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:shadow-xl transition-all duration-200 drop-shadow-2xl",
  standard:
    "inline text-black bg-transparent border-b border-b-2 rounded-none focus:outline-none caret-input",
};
const INPUT_SIZES: Record<TInputSizes, string> = {
  large: "p-4 h-14",
  small: "p-2 h-8",
};

export const InputVariants = cva(
  "w-full rounded text-sm font-bold text-white font-montserrat",
  // "flex w-full rounded border border-input",
  // 'ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  {
    variants: {
      variant: INPUT_VARIANTS,
      size: INPUT_SIZES,
    },
    defaultVariants: { variant: "outlined", size: "large" },
  },
);
