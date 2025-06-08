"use client";

// components
import { ReviewCard } from "@/components/common/Card/ReviewCard";
import { CarouselNext, CarouselPrev } from "@/components/common/Carousel";
// types
import type { IReview } from "@/types/reviews.types";
// lib
import { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

export const HomePageClientReviewsCards = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  function onSlideNext() {
    if (swiperRef.current) swiperRef.current?.swiper.slideNext();
  }
  function onSlidePrev() {
    if (swiperRef.current) swiperRef.current?.swiper.slidePrev();
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <Swiper
        ref={swiperRef}
        className="w-full"
        slidesPerView={1.1}
        centeredSlides
        spaceBetween={8}
        breakpoints={{
          765: {
            slidesPerView: 2,
            centeredSlides: false,
          },
        }}
      >
        {CLIENT_REVIEWS.map((review) => (
          <SwiperSlide key={review._id}>
            <ReviewCard data={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex w-full items-center justify-center gap-8">
        <CarouselPrev onSlidePrev={onSlidePrev} />
        <CarouselNext onSlideNext={onSlideNext} />
      </div>
    </div>
  );
};

const CLIENT_REVIEWS: IReview[] = [
  {
    _id: `${Math.random()}`,
    rate: 3,
    name: "Tom Kirk",
    company: "Zeit Engineering",
    position: "Founder",
    description:
      "Jords+Co has created both a brand identity and a new website that I could not be happier with. In the beginning, Jordan took the time to understand my business and the objectives of both the new branding and the website. Throughout the process communication was fantastic and Jordan really went the extra mile to deliver something that has exceeded my expectations.",
  },
  {
    _id: `${Math.random()}`,
    rate: 3,
    name: "Tom Kirk",
    company: "Zeit Engineering",
    position: "Founder",
    description:
      "Jords+Co has created both a brand identity and a new website that I could not be happier with. In the beginning, Jordan took the time to understand my business and the objectives of both the new branding and the website. Throughout the process communication was fantastic and Jordan really went the extra mile to deliver something that has exceeded my expectations.",
  },
  {
    _id: `${Math.random()}`,
    rate: 3,
    name: "Tom Kirk",
    company: "Zeit Engineering",
    position: "Founder",
    description:
      "Jords+Co has created both a brand identity and a new website that I could not be happier with. In the beginning, Jordan took the time to understand my business and the objectives of both the new branding and the website. Throughout the process communication was fantastic and Jordan really went the extra mile to deliver something that has exceeded my expectations.",
  },
  {
    _id: `${Math.random()}`,
    rate: 3,
    name: "Tom Kirk",
    company: "Zeit Engineering",
    position: "Founder",
    description:
      "Jords+Co has created both a brand identity and a new website that I could not be happier with. In the beginning, Jordan took the time to understand my business and the objectives of both the new branding and the website. Throughout the process communication was fantastic and Jordan really went the extra mile to deliver something that has exceeded my expectations.",
  },
  {
    _id: `${Math.random()}`,
    rate: 3,
    name: "Tom Kirk",
    company: "Zeit Engineering",
    position: "Founder",
    description:
      "Jords+Co has created both a brand identity and a new website that I could not be happier with. In the beginning, Jordan took the time to understand my business and the objectives of both the new branding and the website. Throughout the process communication was fantastic and Jordan really went the extra mile to deliver something that has exceeded my expectations.",
  },
  {
    _id: `${Math.random()}`,
    rate: 3,
    name: "Tom Kirk",
    company: "Zeit Engineering",
    position: "Founder",
    description:
      "Jords+Co has created both a brand identity and a new website that I could not be happier with. In the beginning, Jordan took the time to understand my business and the objectives of both the new branding and the website. Throughout the process communication was fantastic and Jordan really went the extra mile to deliver something that has exceeded my expectations.",
  },
  {
    _id: `${Math.random()}`,
    rate: 3,
    name: "Tom Kirk",
    company: "Zeit Engineering",
    position: "Founder",
    description:
      "Jords+Co has created both a brand identity and a new website that I could not be happier with. In the beginning, Jordan took the time to understand my business and the objectives of both the new branding and the website. Throughout the process communication was fantastic and Jordan really went the extra mile to deliver something that has exceeded my expectations.",
  },
];
