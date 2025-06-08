// services
import { getProject, getProjects } from "@/api/projects.api";
import { HomePageProjects } from "@/containers/Pages/HomePage";
// components
import {
  ProjectPageContent,
  ProjectPageHero,
  ProjectPageVideo,
} from "@/containers/Pages/ProjectPage";
// types
import type { IPageProps } from "@/types/general.types";
import type { IProjectQuery } from "@/types/projects.types";

export default async function ProjectDetailPage(
  props: IPageProps<IProjectQuery>,
) {
  const { params } = props;
  const { projectID } = params;

  const project = await getProject({ projectID });
  const projects = await getProjects({
    page: 1,
    limit: 10,
    owner: project?.owner,
  });

  return (
    <main>
      <ProjectPageHero data={project!} />
      <ProjectPageVideo data={project!} />
      <ProjectPageContent data={project!} />
      <HomePageProjects data={projects} />
    </main>
  );
}
