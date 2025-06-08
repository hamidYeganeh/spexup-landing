// utils
import { cn } from "@/lib/utils";
// types
import type { FC, HTMLAttributes, PropsWithChildren } from "react";

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<PropsWithChildren<IContainerProps>> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div
      className={cn("mx-auto w-full max-w-[var(--container)] px-4", className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};
