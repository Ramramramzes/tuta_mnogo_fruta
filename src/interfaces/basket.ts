import { IProductWp } from "./product";
import { ProductVariation } from "./variation";

export interface IBasket{
  product: IProductWp
  variation: ProductVariation[]
}

export interface IFinalBasket{
  id?: number;
  name?: string;
  price?: number;
  size?: string;
  quantity?: number;
  img?: string;
  category?: string;
  toLink?: IProductWp;
}