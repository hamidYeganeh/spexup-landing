// types
import type { VariantProps } from "class-variance-authority";
// lib
import { BadgeVariants } from "./Badge.variants";

export interface IBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BadgeVariants> {}
