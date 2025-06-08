import { Container } from "@/components/common/Container";
import { Title } from "@/components/ui/Title";
import { HomePageClientReviewsCards } from "@/containers/Sections/HomePage";

export const HomePageClientReviews = () => {
  return (
    <div>
      <Container>
        <div className="relative flex w-full flex-col items-center justify-center gap-8">
          <Title order="h1" className="gradient-text">
            Client Reviews
          </Title>

          <HomePageClientReviewsCards />
        </div>
      </Container>
    </div>
  );
};
