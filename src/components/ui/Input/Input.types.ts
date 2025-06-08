// types
import type { VariantProps } from "class-variance-authority";
import type {
  ComponentPropsWithoutRef,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";
// variants
import { InputVariants } from "./Input.variants";

export type TInputVariants = "outlined" | "standard";
export type TInputSizes = "large" | "small";

// @ts-ignore
export interface IInputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size">,
    VariantProps<typeof InputVariants> {}
