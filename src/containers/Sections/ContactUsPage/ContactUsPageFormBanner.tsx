import { Container } from "@/components/common/Container";
import { Title } from "@/components/ui/Title";
import Image from "next/image";
import {motion} from 'framer-motion'

export const ContactUsPageFormBanner = () => {
  return (
    <div className="h-[400px] w-full overflow-hidden max-md:h-[300px]">
      <Container>
        <div className="relative flex w-full flex-col items-center justify-center">
          <div className="absolute inset-0 top-14 -z-10 m-auto w-full text-center max-md:top-20">
            <Title
              order="h2"
              className="relative text-[260px] font-black italic text-white opacity-20 max-md:invisible"
            >
              SPEXUP
            </Title>
          </div>
          <Title
            order="h1"
            weight={"black"}
            className="gradient-text relative top-32"
          >
            Contact Us
          </Title>
          <Image
            src={"/images/globe/spex-planet.png"}
            alt="Spex planet"
            width={1328}
            height={907}
            className={"relative top-24 h-auto w-full"}
          />
          <Image
            src={"/images/globe/astronut.png"}
            alt="astronut"
            width={644}
            height={644}
            className="absolute inset-0 top-20 mx-auto aspect-square w-[644px]"
          />
        </div>
      </Container>
    </div>
  );
};
