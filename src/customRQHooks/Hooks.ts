import { useQuery } from "@tanstack/react-query";
import {
  cateringfetchProductData,
  getAllMenus,
  getAllDiningOutMenuDatas,
  getAllDiningOutProducts,
  getfetchProductsByMenuId,
  getAllSnacksProductsWithSubMenu,
} from "../services/api";

export const useGetAllMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: getAllMenus,
    refetchOnWindowFocus: false,
  });
};

export const useCateringfetchProductData = (menuId: string, term: string) => {
  return useQuery({
    queryKey: ["fetchProducts"],
    queryFn: () => cateringfetchProductData(menuId, term),
    refetchOnWindowFocus: false,
  });
};

export const useGetAllDiningOutMenuDatas = () => {
  return useQuery({
    queryKey: ["diningOutMenuDatas"],
    queryFn: getAllDiningOutMenuDatas,
    refetchOnWindowFocus: false,
  });
};

export const useGetAllDiningOutProducts = () => {
  return useQuery({
    queryKey: ["diningOutProduct"],
    queryFn: getAllDiningOutProducts,
    refetchOnWindowFocus: false,
  });
};

export const useGetFetchProductsByMenuId = (menuId: string) => {
  return useQuery({
    queryKey: ["fetchProductsByMenuId"],
    queryFn: () => getfetchProductsByMenuId(menuId),
    refetchOnWindowFocus: false,
  });
};

export const useGetSnacksProductsBySubMenuId = (subMenuId: string) => {
  return useQuery({
    queryKey: ["fetchSnacksProductsBySubMenuId"],
    queryFn: () => getAllSnacksProductsWithSubMenu(subMenuId),
    refetchOnWindowFocus: false,
  });
};
