// utils
import { cn } from "@/lib/utils";
// types
import type { FC } from "react";
import type { ISkeletonProps } from "./Skeleton.types";

export const Skeleton: FC<ISkeletonProps> = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={cn("animate-pulse rounded bg-muted", className)}
      {...otherProps}
    />
  );
};
