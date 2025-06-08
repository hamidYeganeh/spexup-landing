// types
import type {
  IProject,
  IProjectQuery,
  IProjects,
  IProjectsQuery,
} from "@/types/projects.types";
import { api, ENDPOINTS } from "./api";
import { apiHelper } from "@/lib/utils";

export const getProjects = async (
  query: IProjectsQuery,
): Promise<IProjects> => {
  try {
    const response = await api.get(apiHelper(ENDPOINTS.project.list, query));
    return response.data;
  } catch (error) {
    return { count: 0, data: [] };
  }
};

export const getProject = async (
  query: IProjectQuery,
): Promise<IProject | undefined> => {
  try {
    const response = await api.get(apiHelper(ENDPOINTS.project.detail, query));
    return response.data;
  } catch (error) {
    return undefined;
  }
};
