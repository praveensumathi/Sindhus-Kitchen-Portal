import {  IProductDropDownData} from "../interface/types";
import { IMenuList, IProductDetail } from "../interface/types";
import { httpWithoutCredentials } from "./http";

const getAllMenus = async () => {
  try {
    const response = await httpWithoutCredentials.get<IMenuList[]>(
      "/menu/getAllMenus"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


const cateringfetchProductData = async (menuId, searchterm = "") => {
  try {
    if (menuId) {
      const response = await httpWithoutCredentials.get<IProductDropDownData[]>(
        `/product/searchProduct/${menuId}?searchTerm=${searchterm}`
      );
      return response.data;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
const fetchProductById = async (productId: string | undefined) => {
  try {
    const response = await httpWithoutCredentials.get<IProductDetail>(
      `product/fetchProductById/${productId}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};


export {
  getAllMenus,
 
  fetchProductById,
  cateringfetchProductData,
};

