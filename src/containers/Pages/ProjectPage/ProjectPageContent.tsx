// components
import { Container } from "@/components/common/Container";
import { Text } from "@/components/ui/Text";
import {
  ProjectPageContentProjectInclude,
  ProjectPageContentSlider,
} from "@/containers/Sections/ProjectPage";
// types
import type { IProject } from "@/types/projects.types";
import type { FC } from "react";

interface IProjectPageContentProps {
  data: IProject;
}

export const ProjectPageContent: FC<IProjectPageContentProps> = (props) => {
  const { data } = props;
  return (
    <section className="mb-4 rounded-b bg-accent-foreground">
      <Container className="py-4">
        <div className="w-full">
          <Text
            size={"md"}
            weight={"semibold"}
            className="whitespace-pre-line text-black"
          >
            {data?.fullDescription}
          </Text>
        </div>

        <ProjectPageContentSlider data={data} />
        <ProjectPageContentProjectInclude data={data} />
      </Container>
    </section>
  );
};
