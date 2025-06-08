import { fade, MotionInView } from "@/components/common/Animation";
import { Title } from "@/components/ui/Title";

export const HomePageProjectsTitles = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <MotionInView variants={fade().inUp}>
        <Title order="h1" className="gradient-text">
          our products
        </Title>
      </MotionInView>
    </div>
  );
};
