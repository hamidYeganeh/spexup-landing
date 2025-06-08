"use client";

// components
import { Button } from "@/components/ui/Button";
import { Icon } from "../Icon";
// types
import type { FC } from "react";
import type { ICarouselPrevProps } from "./Carousel.types";

export const CarouselPrev: FC<ICarouselPrevProps> = (props) => {
  const { onSlidePrev, disabled } = props;

  return (
    <Button
      size={"icon"}
      variant={"outlined"}
      onClick={onSlidePrev}
      disabled={disabled}
    >
      <Icon name="spexup-arrow_left" />
    </Button>
  );
};
