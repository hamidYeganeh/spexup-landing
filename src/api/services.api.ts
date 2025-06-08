// lib
import { api, ENDPOINTS } from "./api";
import { apiHelper } from "@/lib/utils";
// types
import type { IServices, IServicesQuery } from "@/types/services.types";

export const getServices = async (
  query: IServicesQuery,
): Promise<IServices> => {
  try {
    const response = await api.get(apiHelper(ENDPOINTS.services.list, query));
    return response.data;
  } catch (error) {
    return { count: 0, data: [] };
  }
};
