// components
import {
  HomePageServicesCards,
  HomePageServicesVideo,
  HomePageServicesMarquee,
} from "@/containers/Sections/HomePage";
// types
import type { IServices } from "@/types/services.types";
import type { FC } from "react";

interface IHomePageServicesProps {
  data: IServices;
}

export const HomePageServices: FC<IHomePageServicesProps> = (props) => {
  const { data } = props;

  if (!data?.data) return <></>;

  return (
    <section className="w-full">
      <HomePageServicesMarquee data={data} />
      <HomePageServicesVideo />
      <HomePageServicesCards />
    </section>
  );
};
