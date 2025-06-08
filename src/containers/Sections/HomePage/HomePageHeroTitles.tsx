// components
import { Text } from "@/components/ui/Text";
import { Title } from "@/components/ui/Title";

export const HomePageHeroTitles = () => {
  return (
    <div className="mt-24 flex w-full flex-col items-center justify-center gap-2">
      <Title order="h6" className="font-black">
        AGENCY
      </Title>
      <Title order={"h1"} className="gradient-text font-light">
        SPEXUP
      </Title>
      <Text
        size={"md"}
        weight={"extrabold"}
        className="gradient-text capitalize"
      >
        Be beyond the world with us
      </Text>
    </div>
  );
};
