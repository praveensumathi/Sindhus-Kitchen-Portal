import { useQuery } from "@tanstack/react-query";
import {
  cateringfetchProductData,
  getAllMenus,
  getAllDiningOutMenuDatas,
  getAllDiningOutProducts,
  getfetchProductsByMenuId,
  getAllSnacksProductsWithSubMenu,
} from "../services/api";

export const usegetAllMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: getAllMenus,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const usecateringfetchProductData = (menuId: string, term: string) => {
  return useQuery({
    queryKey: ["fetchProducts"],
    queryFn: () => cateringfetchProductData(menuId, term),
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

// export const usegetSnacksProductsBySubMenuId = (subMenuId: string) => {
//   return useQuery({
//     queryKey: ["fetchSnacksProductsBySubMenuId"],
//     queryFn: () => {
//       return getAllSnacksProductsWithSubMenu(subMenuId);
//     },
//     refetchOnWindowFocus: false,
//     refetchOnMount: false,
//   });
// };

export const usegetSnacksProductsBySubMenuId = () => {
  return useQuery({
    queryKey: ["fetchSnacksProductsBySubMenuId"],
    queryFn: getAllSnacksProductsWithSubMenu,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
