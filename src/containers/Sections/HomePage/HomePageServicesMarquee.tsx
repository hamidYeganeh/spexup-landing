// components
import { Marquee } from "@/components/common/Marquee";
import { Title } from "@/components/ui/Title";
// types
import type { FC } from "react";
import type { IServices } from "@/types/services.types";

interface IHomePageServicesMarqueeProps {
  data: IServices;
}

export const HomePageServicesMarquee: FC<IHomePageServicesMarqueeProps> = (
  props,
) => {
  const { data } = props;
  return (
    <section className="py-4">
      <Marquee pauseOnHover>
        {data.data.map((service) => (
          <Title
            key={service._id}
            order="h1"
            className="mx-8 opacity-30 duration-200 hover:text-primary hover:opacity-100"
          >
            {service.title}
          </Title>
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse>
        {data.data.map((service) => (
          <Title
            key={service._id}
            order="h1"
            className="mx-8 opacity-30 duration-200 hover:text-primary hover:opacity-100"
          >
            {service.title}
          </Title>
        ))}
      </Marquee>
    </section>
  );
};
