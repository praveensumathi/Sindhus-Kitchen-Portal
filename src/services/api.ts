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

  //  const fetchProductData = async () => {
  //    try {
  //      const response = await httpWithoutCredentials.get<IProductList[]>(
  //         `/product/searchProduct?searchTerm=${searchTerm}`
  //       // "http://localhost:3000/product/searchProduct/6548792de8b2f4054c4a7193"
  //      );
  //      if (response.data) {
  //      }
  //    } catch (error) {
  //      console.error("Error:", error);
  //    }
  //  };


export { getAllMenus};
