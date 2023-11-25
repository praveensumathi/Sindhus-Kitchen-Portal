export interface ICateringPage {
  id: string;
  menuTitle?: string;
  title: string;
  description: string;
  image: string;
  trayItems: { name: string; price: string }[];
}

export interface IOurServices {
  id: number;
  iconkey: string;
  title: string;
  description: string;
}

export interface IProductCardList {
  _id: string;
  title: string;
  posterURL: string;
  description?: string;
  netWeight?: number;
  price: number | null;
}

export interface IMenuList {
  _id: string;
  title: string;
  menuType: number;
}

export interface IWhyChooseUs {
  id: number;
  imageicon: string;
  title: string;
  description: string;
  image: string;
}

export interface IProductDropDownData {
  _id: string;
  title: string;
  posterURL: string;
}

export interface IProductDetail {
  product: IProduct;
}

export interface IProduct {
  _id: string;
  title: string;
  price: null;
  images: string[];
  servingSizesWithPrice: IPrice[];
  description: string;
  netWeight: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPrice {
  size: string;
  price: number;
  quantity: number;
  _id: string;
}

export interface ISpecials {
  id: number;
  image: string;
}

export interface ICateringEnquiry {
  _id?: string;
  fullName: string;
  email: string;
  typeOfEvent?: string;
  guestCount?: number;
  mobileNumber: string;
  message?: string;
  eventDate: string;
}
// export interface IMenu {
//   mainMenuIds: string[];
//   subMenuIds: any[];
// }

export interface ICategory {
  _id: string;
  title: string;
  image: string;
}

export interface ICategoryWithProducts {
  menuDatas: IMenuDatas;
}

export interface IMenuDatas {
  _id: string;
  title: string;
  image: string;
  products: IProductDinnigOut[];
}

export interface IProductDinnigOut {
  _id: string;
  title: string;
  posterURL: string;
  description: string;
  netWeight: number;
  price: number;
}

export interface ICommonResponse<T> {
  data: T;
  statusCode: number;
  success: boolean;
}

export interface ISnacksPage {
  subMenus: ISubMenu[];
  products: ISnackProduct[];
}

export interface ISnackProduct {
  _id: string;
  title: string;
  posterURL: string;
  price: number | null;
  subMenuId: string;
}

export interface ISubMenu {
  _id: string;
  title: string;
}

export interface ICateringMenu {
  _id: string;
  menuTitle: string;
  products: Product[];
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  servingSizesWithPrice: ServingSizesWithPrice[];
  posterURL?: string;
}

export interface ServingSizesWithPrice {
  size: string;
  price: number;
  quantity: number;
  _id: string;
}

export interface IMenuAutoComplete {
  _id: string;
  title: string;
  menuType: number;
  label: string;
}

export interface IProductAutoComplete {
  _id: string;
  title: string;
  posterURL: string;
  label: string;
}

export interface IServingSizeWithQuantity {
  productId: string;
  sizes: ISize[];
}

export interface ISize {
  size: string;
  qty: number;
}

export interface ISelectedCateringProduct {
  id: string;
  title: string;
  posterURL: string;
}

