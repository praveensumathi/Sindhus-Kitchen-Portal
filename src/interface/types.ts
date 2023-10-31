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
  id: number;
  title: string;
  mrpprice: number;
  offerprice: number;
  imageUrl: string;
}
