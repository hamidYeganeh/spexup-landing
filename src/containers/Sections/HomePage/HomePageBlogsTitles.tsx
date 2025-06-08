import { Text } from "@/components/ui/Text";
import { Title } from "@/components/ui/Title";

export const HomePageBlogsTitles = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Title order="h2" className="gradient-text">
        Our Blog
      </Title>
      <Text
        size={"md"}
        weight={"extrabold"}
        className="gradient-text text-center capitalize"
      >
        Here you will find articles about us, our projects and what moves and
        drives us.You can find a preview in the following section, all other
        articles can be found on our blog.
      </Text>
    </div>
  );
};
