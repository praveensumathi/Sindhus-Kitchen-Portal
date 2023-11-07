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

const fetchProductsById = async () => {
  try {
    const response = await httpWithoutCredentials.get<IProductDetail>(
      "product/fetchProductsById/654887cda8c6272a22e7334a"
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export { getAllMenus, fetchProductsById };
