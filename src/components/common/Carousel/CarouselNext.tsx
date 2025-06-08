"use client";

// components
import { Button } from "@/components/ui/Button";
import { Icon } from "../Icon";
// types
import type { FC } from "react";
import type { ICarouselNextProps } from "./Carousel.types";

export const CarouselNext: FC<ICarouselNextProps> = (props) => {
  const { onSlideNext, disabled } = props;

  return (
    <Button
      size={"icon"}
      variant={"outlined"}
      onClick={onSlideNext}
      disabled={disabled}
    >
      <Icon name="spexup-arrow_right" />
    </Button>
  );
};
