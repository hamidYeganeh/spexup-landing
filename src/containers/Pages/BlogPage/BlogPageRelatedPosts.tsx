"use client";

import { BlogCard } from "@/components/common/Card/BlogCard";
import { CarouselNext, CarouselPrev } from "@/components/common/Carousel";
import { Container } from "@/components/common/Container";
import { AnimatedButton } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import { paths } from "@/config";
import { IBlog } from "@/types/blogs.types";
import Link from "next/link";
import { FC, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

interface IBlogPageRelatedPostsProps {
  data: IBlog;
}
export const BlogPageRelatedPosts: FC<IBlogPageRelatedPostsProps> = (props) => {
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
    <section className="my-8 w-full">
      <Container>
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <Title order="h2" className="gradient-text">
            Related Posts
          </Title>

          <div className="w-full">
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
              {[...data?.previousBlogs, ...data?.nextBlogs].map((blog) => (
                <SwiperSlide key={blog._id}>
                  <BlogCard data={blog} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="my-8 flex flex-col items-center justify-center gap-4">
              <Link href={paths.blogs.list}>
                <AnimatedButton>Show More Blogs</AnimatedButton>
              </Link>
              <div className="flex w-full flex-row items-center justify-center gap-4">
                <CarouselPrev onSlidePrev={handleOnSlidePrev} />
                <CarouselNext onSlideNext={handleOnSlideNext} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
