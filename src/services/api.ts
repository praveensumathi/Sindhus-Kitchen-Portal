import { ICommonResponse, IProduct, ICategory, ICategoryWithProducts, IMenuDatas } from './../interface/types';
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
    const response = await httpWithoutCredentials.get<ICommonResponse<IProduct>>(
      `product/fetchProductById/${productId}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
const getAllDiningOutMenuDatas = async () => {
  try {
    const response = await httpWithoutCredentials.get<ICategory[]>(
      "http://localhost:3000/diningOut/getAllDiningOutMenuDatas"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};



const getAllDiningOutProducts = async () => {
  try {
    const response = await httpWithoutCredentials.get<ICategoryWithProducts[]>(
      "/diningOut/getAllDiningOutProducts"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getfetchProductsByMenuId = async (menuId: string) => {
  try {
    const response = await httpWithoutCredentials.get<IMenuDatas>(
      `http://localhost:3000/diningOut/fetchProductsByMenuId/${menuId}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  getAllMenus,
  fetchProductById,
  cateringfetchProductData,
  getAllDiningOutMenuDatas,
  getAllDiningOutProducts,
  getfetchProductsByMenuId,
};
