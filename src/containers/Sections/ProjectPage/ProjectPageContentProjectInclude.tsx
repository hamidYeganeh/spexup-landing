// services
import { getMedia } from "@/api/api";
// components
import Image from "next/image";
import { Container } from "@/components/common/Container";
// types
import type { IProject } from "@/types/projects.types";
import type { FC } from "react";
import { Title } from "@/components/ui/Title";

interface IProjectPageContentProjectIncludeProps {
  data: IProject;
}
export const ProjectPageContentProjectInclude: FC<
  IProjectPageContentProjectIncludeProps
> = (props) => {
  const { data } = props;
  return (
    <div className="my-4 w-full">
      <Container>
        <div className="grid w-full grid-cols-2 gap-4 max-md:grid-cols-1 max-md:grid-rows-2">
          <div className="flex h-full max-h-full w-full flex-col items-start gap-4 rounded bg-primary-darker p-4">
            <Title order="h4">Project Include</Title>
            <div
              className="line-clamp-[18]"
              dangerouslySetInnerHTML={{ __html: data?.projectInclude ?? "-" }}
            />
          </div>
          <div>
            <Image
              src={getMedia(data?.slides?.[0])}
              alt={data?.name}
              width={659}
              height={711}
              className="h-full w-full rounded object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
