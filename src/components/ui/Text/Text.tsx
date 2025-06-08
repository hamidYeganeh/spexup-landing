import { forwardRef } from "react";
import { ITextProps } from "./Text.types";
import { cn } from "@/lib/utils";
import { TextVariants } from "./Text.variants";

export const Text = forwardRef<HTMLParagraphElement, ITextProps>(
  ({ children, className, weight, size, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(TextVariants({ size, weight }), className)}
        {...props}
      >
        {children}
      </p>
    );
  },
);

Text.displayName = "Text";
