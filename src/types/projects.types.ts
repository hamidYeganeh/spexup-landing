export interface IProject {
  _id: string;
  fullDescription: string;
  name: string;
  owner: string;
  projectDate: string;
  projectInclude: string;
  quote: string;
  result: string;
  roadmap: string;
  shortDescription: string;
  workArea: string;
  slides: string[];
  createdAt?: string;
  updatedAt?: string;
}
export interface IProjects {
  count: number;
  data: IProject[];
}

export interface IProjectsQuery {
  page: number | string | undefined;
  limit?: number | string | undefined;
  name?: string;
  owner?: string;
}
export interface IProjectQuery {
  projectID: string;
}
