"use client";
// components
import { BlogCard } from "@/components/common/Card/BlogCard";
import { AnimatedButton } from "@/components/ui/Button";
import { CarouselNext, CarouselPrev } from "@/components/common/Carousel";
// lib
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Link from "next/link";
// types
import { useRef, type FC } from "react";
import type { IBlogs } from "@/types/blogs.types";
// configs
import { paths } from "@/config";

interface IHomePageBlogsCardsProps {
  data: IBlogs;
}

export const HomePageBlogsCards: FC<IHomePageBlogsCardsProps> = (props) => {
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
    <div className="my-4 w-full">
      <Swiper
        ref={swiperRef}
        slidesPerView={1.2}
        spaceBetween={4}
        breakpoints={{
          575: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
      >
        {[data?.data, data?.data, data?.data, data?.data, data?.data]
          .flat()
          ?.map((blog) => (
            <SwiperSlide key={blog._id}>
              <BlogCard data={blog} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="my-4 flex flex-col items-center justify-center gap-4">
        <Link href={paths.blogs.list}>
          <AnimatedButton>Show More Blogs</AnimatedButton>
        </Link>
        <div className="flex w-full flex-row items-center justify-center gap-4">
          <CarouselPrev onSlidePrev={handleOnSlidePrev} />
          <CarouselNext onSlideNext={handleOnSlideNext} />
        </div>
      </div>
    </div>
  );
};
