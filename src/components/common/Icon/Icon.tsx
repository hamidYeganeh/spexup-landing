// lib
import { cn } from "@/lib/utils";
// types
import type { FC } from "react";
import type { IIconProps } from "./Icon.types";

export const Icon: FC<IIconProps> = (props) => {
  const { className, name, ...otherProps } = props;
  return (
    <i className={cn(`${name}`, "text-xl", className)} {...otherProps}></i>
  );
};
