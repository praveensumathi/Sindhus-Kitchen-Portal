import {
  ICateringEnquiry,
  ICateringMenu,
  ISnacksPage,
} from "./../interface/types";
import {
  ICategory,
  ICategoryWithProducts,
  ICommonResponse,
  IMenuDatas,
  IMenuList,
  IProduct,
  IProductDropDownData,
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

const cateringfetchProductData = async (menuId = "", searchterm = "") => {
  try {
    if (menuId) {
      const response = await httpWithoutCredentials.get<IProductDropDownData[]>(
        `/product/searchProduct/${menuId}?searchTerm=${searchterm}`
      );
      return response.data;
    }

    return [];
  } catch (error) {
    console.error("Error:", error);
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
      "diningOut/getAllDiningOutMenuDatas"
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
      `diningOut/fetchProductsByMenuId/${menuId}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const getProductsByMenuIdWithSearchTerm = async (
  selectedMenuId: string,
  searchTerm: string
) => {
  try {
    const response = await httpWithoutCredentials.get<IProductDropDownData[]>(
      `/product/searchProduct/${selectedMenuId}?searchTerm=${searchTerm}`
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};

const getAllSnacksProductsWithSubMenu = async (subMenuId: string) => {
  try {
    const response = await httpWithoutCredentials.get<ISnacksPage>(
      `/product/getAllSnacksMenu/${subMenuId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const fetchProductByCateringMenu = async (
  menuId?: string,
  productId?: string
) => {
  try {
    var cateringMenus = "/product/fetchProductsByCateringMenu";

    if (menuId && productId) {
      cateringMenus += `/${menuId}/${productId}`;
    } else if (menuId) {
      cateringMenus += `/${menuId}`;
    }

    const response = await httpWithoutCredentials.get<ICateringMenu>(
      cateringMenus
    );

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
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
  createCateringEnquiry,
  getProductsByMenuIdWithSearchTerm,
  getAllSnacksProductsWithSubMenu,
  fetchProductByCateringMenu,
};
