// components
import { Container } from "@/components/common/Container";
// sections
import {
  HomePageHeroTitles,
  HomePageHeroBox,
} from "@/containers/Sections/HomePage";

export const HomePageHeroSection = () => {
  return (
    <section className="w-full relative">
      <Container className="max-md:max-w-full max-md:px-0">
        <div className="bg-[#C66BF9] rounded-full w-[380px] aspect-square absolute -left-0 my-auto blur-[180px] opacity-60"></div>
        <HomePageHeroTitles />
        <HomePageHeroBox />
      </Container>
    </section>
  );
};
