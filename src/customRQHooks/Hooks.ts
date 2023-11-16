import { useQuery } from "@tanstack/react-query";
import {
  
  getAllMenus,
  getAllDiningOutMenuDatas,
  getAllDiningOutProducts,
  getfetchProductsByMenuId,
  fetchProductByCateringMenu,
} from "../services/api";

export const usegetAllMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: getAllMenus,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const usefetchProductByCateringMenu = (menuId?: string, productId?: string) => {
  return useQuery({
    queryKey: ["fetchProducts", menuId],
    queryFn: () => fetchProductByCateringMenu(menuId, productId),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
     });
};

export const usegetAllDiningOutMenuDatas = () => {
  return useQuery({
    queryKey: ["diningOutMenuDatas"],
    queryFn: getAllDiningOutMenuDatas,
    refetchOnWindowFocus: false,
  });
};

export const usegetAllDiningOutProducts = () => {
  return useQuery({
    queryKey: ["diningOutProduct"],
    queryFn: getAllDiningOutProducts,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const usegetfetchProductsByMenuId = (menuId: string) => {
  return useQuery({
    queryKey: ["fetchProductsByMenuId", menuId],
    queryFn: () => {
      return getfetchProductsByMenuId(menuId);
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
