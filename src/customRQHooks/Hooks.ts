import { useQuery } from "@tanstack/react-query";
import {   cateringfetchProductData, fetchProductData, getAllMenus} from "../services/api";

export const usegetAllMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: getAllMenus,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};


export const usefetchProductData = (menuId: string,term) => {
  return useQuery({
    queryKey: ["fetchProduct"],
    queryFn: () => fetchProductData(menuId,term),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
export const usecateringfetchProductData = (menuId: string, term) => {
  return useQuery({
    queryKey: ["fetchProduct"],
    queryFn: () => cateringfetchProductData(menuId, term),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

