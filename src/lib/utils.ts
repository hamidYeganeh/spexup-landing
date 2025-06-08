import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const apiHelper = (url: string, filters: any) => {
  let filterParams = {};
  Object?.keys(filters)?.forEach((key) => {
    filterParams = {
      ...filterParams,
      ...(filters[key] ? { [key]: filters[key] } : {}),
    };
  });
  const joinFilters = Object.entries(filterParams).join("&");
  const finalFilters = joinFilters.replaceAll(",", "=");

  return finalFilters !== "" ? `${url}?${finalFilters}` : url;
};
