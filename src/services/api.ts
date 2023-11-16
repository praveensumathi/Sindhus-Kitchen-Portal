import { ICateringEnquiry, IMenu } from "./../interface/types";
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


const fetchProductByCateringMenu = async (
  menuId: string | undefined,
  productId: string | undefined
) => {
  try {
    var cateringMenus = `/product/fetchProductsByCateringMenu`;

    if (menuId && productId) {
      cateringMenus += `/${menuId}/${productId}`;
    } else if (menuId) {
      cateringMenus += `/${menuId}`;
    }

    const response = await httpWithoutCredentials.get<IMenu[]>(cateringMenus);
    console.log("API Response:", response.data);

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
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

export {
  getAllMenus,
  fetchProductById,
  fetchProductByCateringMenu,
  getAllDiningOutMenuDatas,
  getAllDiningOutProducts,
  getfetchProductsByMenuId,
  createCateringEnquiry,
  getProductsByMenuIdWithSearchTerm,
};
