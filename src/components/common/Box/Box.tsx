import { FC, PropsWithChildren } from "react";
import { HeroHighlight } from "./BoxDottedBg";
import { IBoxProps } from "./Box.types";
import { cn } from "@/lib/utils";

export const Box: FC<PropsWithChildren<IBoxProps>> = (props) => {
  const { children, className, highlightClassName } = props;
  return (
    <div
      className={cn(
        "w-full rounded border border-border bg-background-paper",
        className,
      )}
    >
      <HeroHighlight className="w-full">
        <div
          className={cn(
            "w-full px-12 py-8 max-sm:px-4 max-sm:py-3",
            highlightClassName,
          )}
        >
          {children}
        </div>
      </HeroHighlight>
    </div>
  );
};
