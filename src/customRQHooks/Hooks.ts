import { useQuery } from "@tanstack/react-query";
import { getAllCateringMenus, getAllMenus } from "../services/api";

export const usegetAllMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: getAllMenus,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const usegetAllCateringMenus = () => {
  return useQuery({
    queryKey: ["cateringMenus"],
    queryFn: getAllCateringMenus,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
