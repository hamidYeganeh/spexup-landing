import { Container } from "@/components/common/Container";
import { AnimatedButton } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import Image from "next/image";

export const HomePageGetStarted = () => {
  return (
    <div className="w-full">
      <Container className="relative flex h-[530px] items-center justify-center">
        <div className="absolute inset-0 z-0 m-auto flex items-center justify-center">
          <Image
            src={"/images/globe/get-start-bg.png"}
            alt="get-start"
            width={860}
            height={530}
          />
        </div>
        <div className="z-10 flex flex-col items-center justify-center gap-8">
          <div>
            <Title
              order="h2"
              size={"5xl"}
              className="gradient-text text-center"
            >
              Ready to
            </Title>
            <Title
              order="h2"
              size={"5xl"}
              className="gradient-text text-center"
            >
              get started?
            </Title>
          </div>
          <AnimatedButton>get started</AnimatedButton>
        </div>
      </Container>
    </div>
  );
};
