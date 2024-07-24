import { useState, useEffect } from 'react';
import axios from 'axios';
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts, setPagesLimit } from '../store/catalog';

export const useWp = () => {
  const [products, setProducts] = useState<IProductWp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const CatalogState = useSelector((state: RootState) => state.catalog);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const startIndex = (CatalogState.page - 1) * 6;
      const endIndex = startIndex + 6;
      
      try {
        const url = "https://tuta-mnogo-fruta.ru/wp-json/wc/v3/products";
        const consumer_key = "ck_db1b37ff5e14c628dbaaadf3de6d27e76d0806aa";
        const consumer_secret = "cs_0b918664f2ec0b7e6ac4e64f51defa60ae86e03a";
        const auth = {
          username: consumer_key,
          password: consumer_secret,
        };

        const perPage = 100;
        let page = 1;
        let allProducts: IProductWp[] = [];
        let fetchedProducts: IProductWp[] = [];

        do {
          const response = await axios.get<IProductWp[]>(url, {
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

        dispatch(setAllProducts(allProducts));

        if (CatalogState.currentCatalog && CatalogState.currentCatalog !== '') {
          const filteredProducts = allProducts.filter(el =>
            el.categories.some(category => category.name === CatalogState.currentCatalog)
          );

          setProducts(filteredProducts.slice(startIndex, endIndex));
          dispatch(setPagesLimit(Math.ceil(filteredProducts.length / 6)));
        } else {
          setProducts(allProducts.slice(startIndex, endIndex));
          dispatch(setPagesLimit(Math.ceil(allProducts.length / 6)));
        }

        setLoading(false);
      } catch (error: any) {
        setError(error.message || 'Something went wrong');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [CatalogState.currentCatalog, CatalogState.page, dispatch]);

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
  price: string;
  slug: string;
}