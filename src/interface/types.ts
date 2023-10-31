export interface ICateringPage {
  id: string;
  title: string;
  description: string;
  image: string;
  halfTray: string;
  mediumTray: string;
  fullTray: string;
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
