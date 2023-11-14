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

export interface ICategoryWithProducts {
  _id: string;
  data: string;
  image: string;
  products: IProductCardList[];
}

export interface IProductCardList {
  _id: string;
  title: string;
  mrpprice: number;
  offerprice: number;
  imageUrl: string;
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

export interface IProductDetail {
  product: IProduct;
}

export interface IProduct {
  menu: IMenu;
  _id: string;
  title: string;
  price: null;
  images: any[];
  servingSizesWithPrice: IServingSizesWithPrice[];
  description: string;
  netWeight: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMenu {
  mainMenuIds: string[];
  subMenuIds: any[];
}

export interface IServingSizesWithPrice {
  size: string;
  price: number;
  quantity: number;
  _id: string;
}
export interface ISpeicals{
  id: number;
  image: String;
}

