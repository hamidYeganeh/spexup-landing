// lib
import { forwardRef } from "react";
// utils
import { cn } from "@/lib/utils";
// config
import { TitleVariants } from "./Title.variants";
// types
import type { ITitleProps } from "./Title.types";

export const Title = forwardRef<HTMLHeadingElement, ITitleProps>(
  ({ order, children, className, ...props }, ref) => {
    const Comp = order;

    return (
      <Comp
        className={cn(TitleVariants({ order }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Title.displayName = "Title";
