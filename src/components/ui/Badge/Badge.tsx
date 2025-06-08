// lib
import { cn } from "@/lib/utils";
// types
import type { IBadgeProps } from "./Badge.types";
import { BadgeVariants } from "./Badge.variants";

function Badge(props: IBadgeProps) {
  const { className, variant, ...otherProps } = props;
  return (
    <div
      className={cn(BadgeVariants({ variant }), className)}
      {...otherProps}
    />
  );
}

export { Badge };
