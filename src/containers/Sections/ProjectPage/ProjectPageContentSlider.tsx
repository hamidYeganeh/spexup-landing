"use client";

// lib
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useRef } from "react";
// utils
import { getMedia } from "@/api/api";
// components
import { CarouselNext, CarouselPrev } from "@/components/common/Carousel";
// types
import type { FC } from "react";
import type { IProject } from "@/types/projects.types";

interface IProjectPageContentSliderProps {
  data: IProject;
}
export const ProjectPageContentSlider: FC<IProjectPageContentSliderProps> = (
  props,
) => {
  const { data } = props;

  const swiperRef = useRef<SwiperRef | null>(null);

  function handleOnSlideNext() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }
  function handleOnSlidePrev() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  return (
    <div className="relative my-4 w-full">
      <Swiper ref={swiperRef} className="z-0">
        {data?.slides?.map((slide) => (
          <SwiperSlide key={slide}>
            <Image
              src={getMedia(slide)}
              alt={slide}
              width={1328}
              height={700}
              className="h-full max-h-[700px] w-full rounded object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 bottom-10 z-10 flex w-full flex-row items-center justify-center gap-8 bg-red-400 max-md:bottom-2 max-md:items-end">
        <CarouselPrev onSlidePrev={handleOnSlidePrev} />
        <CarouselNext onSlideNext={handleOnSlideNext} />
      </div>
    </div>
  );
};
