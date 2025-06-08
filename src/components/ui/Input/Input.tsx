// lib
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
// types
import type { IInputProps } from "./Input.types";
import { InputVariants } from "./Input.variants";

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, size, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(InputVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
