// components
import { Box } from "@/components/common/Box";
import { ServiceCard } from "@/components/common/Card/ServiceCard";
import { Container } from "@/components/common/Container";
import { Text } from "@/components/ui/Text";
import { Title } from "@/components/ui/Title";
// lib
import Image from "next/image";
// config
import { SERVICES } from "@/lib/services.constants";
import { MotionInView, slide } from "@/components/common/Animation";

export const HomePageServicesCards = () => {
  return (
    <Container className="relative my-4">
      <div className="flex w-full flex-col items-center gap-2">
        <Title order="h1" className="gradient-text">
          {"Our Services"}
        </Title>
        <Text weight={"bold"} size={"sm"} className="text-center">
          Need to build a new mobile or web app from scratch? Or have a product
          you need to improve?Let’s bring your ideas to life together. Learn
          more about our services.
        </Text>

        <Box>
          <div className="grid w-full grid-cols-4 gap-4 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-2">
            <div className="col-span-1 flex h-fit flex-col gap-4">
              {SERVICES.slice(0, 2).map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
            <div className="col-span-1 flex h-fit flex-col gap-4">
              {SERVICES.slice(2, 4).map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
            <div className="col-span-1 flex h-fit flex-col gap-4">
              {SERVICES.slice(4, 6).map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
            <div className="col-span-1 flex h-fit flex-col gap-4">
              {SERVICES.slice(6, 8).map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          </div>
        </Box>
      </div>
      <div className="absolute inset-0 top-full -z-20 mx-auto flex w-full items-center justify-center">
        <MotionInView variants={slide().inDown}>
          <Image
            src={"/images/globe/half-planet-1.png"}
            alt="half-planet"
            width={829}
            height={446}
            className="h-auto w-full max-w-[829px] max-md:max-w-[320px]"
          />
        </MotionInView>
      </div>
    </Container>
  );
};
