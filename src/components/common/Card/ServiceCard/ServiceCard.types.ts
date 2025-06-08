import type { IService } from "@/types/services.types";

export type TServiceCardType = Pick<IService, "title" | "_id"> & {
  icon: any;
  height: string | number;
  subtitle: string;
};

export interface IServiceCardProps {
  service: TServiceCardType;
}
