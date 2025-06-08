// types
import { Box } from "@/components/common/Box";
import { Container } from "@/components/common/Container";
import { Text } from "@/components/ui/Text";
import { Title } from "@/components/ui/Title";
import type { IProject } from "@/types/projects.types";
import { format } from "date-fns";
import type { FC } from "react";

interface IProjectPageHeroProps {
  data: IProject;
}

export const ProjectPageHero: FC<IProjectPageHeroProps> = (props) => {
  const { data } = props;
  return (
    <section className="mt-32">
      <Container>
        <div className="grid w-full grid-cols-2 gap-4 max-md:grid-cols-1 max-md:grid-rows-2">
          <div className="flex flex-col items-start gap-4">
            <Title order="h1" weight={"black"} className="text-foreground">
              {data?.name}
            </Title>
            <Text size={"md"} weight={"semibold"} className="text-foreground">
              {data?.shortDescription}
            </Text>
          </div>
          <div className="sticky top-10 flex h-full w-full flex-col gap-4">
            <Box
              className="w-full"
              highlightClassName="w-full p-4 flex flex-row items-center justify-between"
            >
              <Text
                size={"md"}
                weight={"semibold"}
                className="line-clamp-1 text-foreground"
              >
                Owner
              </Text>
              <Text
                size={"md"}
                weight={"semibold"}
                className="line-clamp-1 text-foreground"
              >
                {data?.owner}
              </Text>
            </Box>
            <Box
              className="w-full"
              highlightClassName="w-full p-4 flex flex-row items-center justify-between"
            >
              <Text
                size={"md"}
                weight={"semibold"}
                className="line-clamp-1 text-foreground"
              >
                Industry
              </Text>
              <Text
                size={"md"}
                weight={"semibold"}
                className="line-clamp-1 text-foreground"
              >
                {data?.result}
              </Text>
            </Box>
            <Box
              className="w-full"
              highlightClassName="w-full p-4 flex flex-row items-center justify-between"
            >
              <Text
                size={"md"}
                weight={"semibold"}
                className="line-clamp-1 text-foreground"
              >
                Project Date
              </Text>
              <Text
                size={"md"}
                weight={"semibold"}
                className="line-clamp-1 text-foreground"
              >
                {data?.projectDate
                  ? format(data?.projectDate, "yy.MM.dd")
                  : "-"}
              </Text>
            </Box>
          </div>
        </div>
      </Container>
    </section>
  );
};
