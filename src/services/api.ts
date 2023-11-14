import {
  ICategory,
  ICateringEnquiry,
  ICategoryWithProducts,
  ICommonResponse,
  IMenuDatas,
  IMenuList,
  IProduct,
} from "../interface/types";
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

const fetchProductById = async (productId: string | undefined) => {
  try {
    const response = await httpWithoutCredentials.get<
      ICommonResponse<IProduct>
    >(`product/fetchProductById/${productId}`);
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

const createCateringEnquiry = async (data: ICateringEnquiry) => {
  try {
    const response = await httpWithoutCredentials.post(
      "enquiry/createEnquiry",
      data
    );
    console.log("this is response", response.data);
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
  getAllDiningOutMenuDatas,
  getAllDiningOutProducts,
  getfetchProductsByMenuId,
  createCateringEnquiry,
};
