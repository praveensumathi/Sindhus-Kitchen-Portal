import { useQuery } from "@tanstack/react-query";
import {  getAllMenus} from "../services/api";

export const usegetAllMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: getAllMenus,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};


// export const usefetchProductData = () => {
//   return useQuery({
//     queryKey: ["searchTerm"],
//     queryFn: fetchProductData,
//     refetchOnWindowFocus: false,
//     refetchOnMount: false,
//   });
// };
