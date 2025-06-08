import { IBlog, IBlogQuery, IBlogs, IBlogsQuery } from "@/types/blogs.types";
import { api, ENDPOINTS } from "./api";
import { apiHelper } from "@/lib/utils";

export const getBlogs = async (query: IBlogsQuery): Promise<IBlogs> => {
  try {
    const response = await api.get(apiHelper(ENDPOINTS.blogs.list, query));
    return response.data;
  } catch (error) {
    return { count: 0, data: [] };
  }
};

export const getBlog = async (
  query: IBlogQuery,
): Promise<IBlog | undefined> => {
  try {
    const response = await api.get(apiHelper(ENDPOINTS.blogs.detail, query));
    return response.data;
  } catch (error) {
    return undefined;
  }
};
