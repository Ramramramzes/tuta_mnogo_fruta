import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import axios from "axios";



export const useOneItem = () => {
  const ItemState = useSelector((state: RootState) => state.item);
  const [item, setItem] = useState<ProductVariation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `https://tuta-mnogo-fruta.ru/wp-json/wc/v3/products/${ItemState.itemId}/variations`;
        const consumer_key = "ck_db1b37ff5e14c628dbaaadf3de6d27e76d0806aa";
        const consumer_secret = "cs_0b918664f2ec0b7e6ac4e64f51defa60ae86e03a";
        const auth = {
          username: consumer_key,
          password: consumer_secret,
        };

        const response = await axios.get(url, {auth: auth});
        setItem(response.data)
      }
      catch(error:any){
        setError(error);
        setLoading(false);
      }finally{
        setLoading(false);
      }

    }
    fetchData();

    
  },[ItemState.itemId])
  
  return { item, loading, error };
}


export interface ImageOne {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

interface Attribute {
  id: number;
  name: string;
  option: string;
}

interface Links {
  self: { href: string }[];
  collection: { href: string }[];
  up: { href: string }[];
}

export interface ProductVariation {
  categories: any;
  _links: Links;
  attributes: Attribute[];
  backordered: boolean;
  backorders: string;
  backorders_allowed: boolean;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  date_on_sale_from: string | null;
  date_on_sale_from_gmt: string | null;
  date_on_sale_to: string | null;
  date_on_sale_to_gmt: string | null;
  description: string;
  default_attributes: [{name: string }];
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  download_expiry: number;
  download_limit: number;
  downloadable: boolean;
  downloads: any[];
  id: number;
  image: ImageOne;
  images?: ImageOne[];
  low_stock_amount: number | null;
  manage_stock: boolean;
  menu_order: number;
  meta_data: any[];
  name: string;
  on_sale: boolean;
  parent_id: number;
  permalink: string;
  price: number;
  purchasable: boolean;
  regular_price: string;
  sale_price: string;
  shipping_class: string;
  shipping_class_id: number;
  sku: string;
  status: string;
  stock_quantity: number | null;
  stock_status: string;
  tax_class: string;
  tax_status: string;
  virtual: boolean;
  weight: string;
}
