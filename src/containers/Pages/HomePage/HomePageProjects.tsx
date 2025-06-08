// components
import { Container } from "@/components/common/Container";
import {
  HomePageProjectsCards,
  HomePageProjectsTitles,
} from "@/containers/Sections/HomePage";
// types
import type { FC } from "react";
import type { IProjects } from "@/types/projects.types";

interface IHomePageProjectsProps {
  data: IProjects;
}

export const HomePageProjects: FC<IHomePageProjectsProps> = (props) => {
  const { data } = props;

  if (!data?.data.length) return <></>;

  return (
    <section className="mt-48 w-full">
      <Container className="flex flex-col gap-8">
        <HomePageProjectsTitles />
        <HomePageProjectsCards data={data} />
      </Container>
    </section>
  );
};
