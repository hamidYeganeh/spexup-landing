import { apiHelper } from "@/lib/utils";
import axios from "axios";
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});

export const ENDPOINTS = {
  services: {
    list: "/duty/list",
  },
  project: {
    list: "/project/list",
    detail: "/project/detail",
  },
  blogs: {
    list: "/blog/list",
    detail: "/blog/detail",
  },
  contact: {
    create: "/contact/create",
  },
  media: {
    get: "/media/get",
  },
};

export const getMedia = (hash: string, pt?: "m1000") => {
  return apiHelper(`${BASE_URL}${ENDPOINTS.media.get}`, {
    hash,
    pt: pt ?? "m1000",
  });
};
