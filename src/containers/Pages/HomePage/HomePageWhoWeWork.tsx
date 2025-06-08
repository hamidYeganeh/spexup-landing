import { Container } from "@/components/common/Container";
import { ContainerScroll } from "@/components/common/TabletContainerScroll";
import { Text } from "@/components/ui/Text";
import { Title } from "@/components/ui/Title";

export const HomePageWhoWeWork = () => {
  return (
    <section>
      <Container>
        <ContainerScroll
          titleComponent={
            <>
              <Title order="h1" className="gradient-text">
                Who we work
              </Title>
              <Title order="h1" className="gradient-text">
                with
              </Title>
            </>
          }
        >
          <div className="flex w-full flex-col items-start gap-8">
            <Text size={"sm"} weight={"bold"} className="text-primary-lighter">
              We collaborate with funded startups, established businesses,
              enterprise companies, and agencies to provide tailored design and
              development solutions. Our expertise enhances your brand presence,
              drives growth, and fosters long-term success in your respective
              industries.
            </Text>

            <div className="flex flex-col items-start gap-4">
              <Title order="h6" weight={"black"} className="text-primary">
                Funded startups
              </Title>
              <Text
                size={"sm"}
                weight={"bold"}
                className="text-primary-lighter"
              >
                Empower your startup's vision with our innovative design. We
                collaborate with ambitious founders like you to establish a
                strong brand presence and accelerate growth, bringing your ideas
                to life.
              </Text>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Title order="h6" weight={"black"} className="text-primary">
                Mid-market businesses
              </Title>
              <Text
                size={"sm"}
                weight={"bold"}
                className="text-primary-lighter"
              >
                Elevate your business with impactful design. We craft custom
                strategies to boost your brand identity, enhance online
                presence, and drive meaningful customer engagement, helping you
                stand out in the market.
              </Text>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Title order="h6" weight={"black"} className="text-primary">
                Enterprise companies
              </Title>
              <Text
                size={"sm"}
                weight={"bold"}
                className="text-primary-lighter"
              >
                We partner with enterprise companies, delivering comprehensive
                design solutions that align with their scale and vision. Our
                expertise helps them achieve a cohesive and influential brand
                presence across platforms.
              </Text>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Title order="h6" weight={"black"} className="text-primary">
                Partner agencies
              </Title>
              <Text
                size={"sm"}
                weight={"bold"}
                className="text-primary-lighter"
              >
                We collaborate with partner agencies, complementing their
                services with our solutions. Together, we create remarkable
                experiences for their clients, creating lasting relationships
                and mutual success.
              </Text>
            </div>
          </div>
        </ContainerScroll>
      </Container>
    </section>
  );
};
