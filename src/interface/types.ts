export interface ICateringPage {
  id: string;
  title: string;
  description: string;
  image: string;
  trayItems: string[];
}
export interface IOurServices {
  id: number;
  iconkey: string;
  title: string;
  description: string;
}
export interface IProductCardList {
  id: number;
  title: string;
  mrpprice: number;
  offerprice: number;
  imageUrl: string;
}
