import { IProductWp } from "./product";
import { ProductVariation } from "./variation";

export interface IBasket{
  product: IProductWp
  variation: ProductVariation[]
}