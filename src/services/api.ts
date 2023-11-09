import { IMenuList, IProductList } from "../interface/types";
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
const fetchProductData = async (menuId, searchterm) => {
  try {
    const response = await httpWithoutCredentials.get<IProductList[]>(
      `/product/searchProduct/${menuId}?searchTerm=${searchterm}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};



export { getAllMenus,fetchProductData};
