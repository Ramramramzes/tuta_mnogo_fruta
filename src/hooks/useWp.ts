import { useState, useEffect } from 'react';
import axios from 'axios';

export const getWpData = () => {
  const [products, setProducts] = useState<IProductWp[]>([]);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://tuta-mnogo-fruta.ru/wp-json/wc/v3/products";
        // const url = `https://tuta-mnogo-fruta.ru/wp-json/wc/v3/products/${id_товара}/variations`;
        const consumer_key = "ck_db1b37ff5e14c628dbaaadf3de6d27e76d0806aa";
        const consumer_secret = "cs_0b918664f2ec0b7e6ac4e64f51defa60ae86e03a";
        const auth = {
          username: consumer_key,
          password: consumer_secret,
        };

        const perPage = 100; // Максимальное значение per_page
        let page = 1;
        let allProducts:IProductWp[] = [];
        let fetchedProducts = [];

        do {
          const response = await axios.get(url, {
            auth,
            params: {
              per_page: perPage,
              page,
            },
          });
          fetchedProducts = response.data;
          allProducts = [...allProducts, ...fetchedProducts];
          page += 1;
        } while (fetchedProducts.length === perPage);
        
        setProducts(allProducts);
        setLoading(false);
      } catch (error:any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export interface IProductWp {
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
  };
  attributes: {
    id: number;
    name: string;
    options: string[];
  }[];
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  description: string;
  default_attributes: {
    id: number;
    name: string;
    option: string;
  }[];
  id: number;
  images: {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
  }[];
  meta_data: {
    id: number;
    key: string;
    value: string;
  }[];
  name: string;
  slug: string;
}