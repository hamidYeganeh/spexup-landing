export interface IServiceProcess {
  title: string;
  content: string;
  _id: string;
}
export interface IService {
  dutyProcess: IServiceProcess[];
  _id: string;
  content: string;
  heroImage: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IServices {
  count: number;
  data: IService[];
}

export interface IServicesQuery {
  page?: number | string;
  limit?: number | string;
  title?: string;
}
