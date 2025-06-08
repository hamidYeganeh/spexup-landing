"use client";

// lib
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Parallax } from "swiper/modules";
import { useRef } from "react";
// types
import type { FC } from "react";
import type { IProjects } from "@/types/projects.types";
// components
import { Title } from "@/components/ui/Title";
import { AnimatedButton } from "@/components/ui/Button";
import { ProjectCard } from "@/components/common/Card/ProjectCard";
import { CarouselNext, CarouselPrev } from "@/components/common/Carousel";
import Link from "next/link";
import { paths } from "@/config";
import Image from "next/image";

interface IHomePageProjectsCards {
  data: IProjects;
}

export const HomePageProjectsCards: FC<IHomePageProjectsCards> = (props) => {
  const { data } = props;

  const swiperRef = useRef<SwiperRef | null>(null);

  function onSlideNext() {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  }
  function onSlidePrev() {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  }

  return (
    <div className="w-full">
      <Swiper
        ref={swiperRef}
        parallax
        slidesPerView={1.2}
        centeredSlides
        spaceBetween={4}
        breakpoints={{
          765: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          1440: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
        modules={[Parallax]}
      >
        {data?.data?.map((project) => (
          <SwiperSlide
            key={project._id}
            className="max-md:flex max-md:w-full max-md:items-center max-md:justify-center"
          >
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative mb-8 w-full py-8">
        <div className="z-10 flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-row items-center justify-center gap-8">
            <CarouselPrev onSlidePrev={onSlidePrev} />
            <CarouselNext onSlideNext={onSlideNext} />
          </div>
          <Title order="h4" className="gradient-text">
            ALL products
          </Title>
          <Link href={paths.projects.list}>
            <AnimatedButton>Show More</AnimatedButton>
          </Link>
        </div>
        <div className="-z-100 absolute -bottom-10 left-0 right-0 mx-auto flex items-center justify-center">
          <Image
            src={"/images/globe/half-planet-2.png"}
            alt="half-planet"
            width={420}
            height={500}
            className="h-auto w-full max-w-[420px]"
          />
        </div>
      </div>
    </div>
  );
};
