"use client";

// lib
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";
import { useRef, useState } from "react";
// types
import type { IBlogs } from "@/types/blogs.types";
import type { FC } from "react";
import type { Swiper as SwiperType } from "swiper/types";
// utils
import { getMedia } from "@/api/api";
// components
import { Skeleton } from "@/components/ui/Skeleton";
import { BlogCardStretched } from "@/components/common/Card/BlogCard";
import { Container } from "@/components/common/Container";
import { CarouselNext, CarouselPrev } from "@/components/common/Carousel";

interface IBlogsPageSliderProps {
  data?: IBlogs;
}
export const BlogsPageSlider: FC<IBlogsPageSliderProps> = (props) => {
  const { data } = props;

  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleOnActiveIndexChange(swiper: SwiperType): void {
    setActiveIndex(swiper.activeIndex);
  }
  function handleOnSlideNext() {
    if (swiperRef.current) {
      swiperRef?.current?.swiper.slideNext();
    }
  }
  function handleOnSlidePrev() {
    if (swiperRef.current) {
      swiperRef?.current?.swiper.slidePrev();
    }
  }

  if (!data?.data) return <></>;

  return (
    <section className="relative mb-8 h-full max-h-[758px] min-h-[758px] w-full">
      <div className="bg-dark-gradient absolute bottom-0 z-10 h-80 w-full"></div>
      <Swiper
        ref={swiperRef}
        parallax
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop
        className="z-0"
        modules={[Parallax, Autoplay]}
        onActiveIndexChange={handleOnActiveIndexChange}
      >
        {data?.data?.map((blog) => (
          <SwiperSlide key={blog._id}>
            <Image
              src={getMedia(blog.heroImage)}
              alt={blog.title}
              width={1440}
              height={758}
              className="h-auto max-h-[758px] w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -bottom-20 z-20 w-full">
        <Container className="relative">
          <div className="absolute right-8 top-4 z-30 flex flex-row items-center gap-4">
            <CarouselPrev onSlidePrev={handleOnSlidePrev} />
            <CarouselNext onSlideNext={handleOnSlideNext} />
          </div>
          <BlogCardStretched data={data?.data?.[activeIndex]} />
        </Container>
      </div>
    </section>
  );
};
