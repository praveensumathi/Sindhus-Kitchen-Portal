import { ICateringEnquiry, ISnacksPage } from "./../interface/types";
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
const getProductsByMenuIdWithSearchTerm = async (
  selectedMenuId,
  searchTerm,
  setProducts
) => {
  try {
    const response = await httpWithoutCredentials.get<IProductDropDownData[]>(
      `/product/searchProduct/${selectedMenuId}?searchTerm=${searchTerm}`
    );
    if (response && response.data.length > 0) {
      const products: IProductDropDownData[] = response.data.map((product) => ({
        _id: product._id,
        title: product.title,
        posterURL: product.posterURL,
      }));

      setProducts(products);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

// const getAllSnacksProductsWithSubMenu = async (subMenuId) => {
//   try {
//     if (subMenuId) {
//       const response = await httpWithoutCredentials.get<ISnacksPage>(
//         `/product/getAllSnacksMenu/${subMenuId}`
//       );
//       return response.data;
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

const getAllSnacksProductsWithSubMenu = async () => {
  try {
    const response = await httpWithoutCredentials.get<ISnacksPage>(
      `/product/getAllSnacksMenu`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
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
  getAllSnacksProductsWithSubMenu
};
