// components
import { Slot } from "@radix-ui/react-slot";
// lib
import { forwardRef } from "react";
// utils
import { cn } from "@/lib/utils";
// config
import { ButtonVariants } from "./Button.variants";
// types
import type { IButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(ButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, ButtonVariants };
