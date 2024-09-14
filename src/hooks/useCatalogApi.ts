import axios from 'axios';
import { useState } from 'react';
import { IProductWp } from '../interfaces/product';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { setAllProductsStore } from '../store/catalog';

const perPage = 6;
const consumer_key = "ck_db1b37ff5e14c628dbaaadf3de6d27e76d0806aa";
const consumer_secret = "cs_0b918664f2ec0b7e6ac4e64f51defa60ae86e03a";

export const useCatalogApi = () => {
  const [allCatalog, setAllCatalog] = useState<IProductWp[]>([]);
  const [pageCatalog, setPageCatalog] = useState<IProductWp[]>([]);
  const [categoryCatalog, setCategoryCatalog] = useState<IProductWp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(1);

  const dispatch = useDispatch<AppDispatch>();

  const getPageCatalog = async (page: number) => {
    setLoading(true);
    try {
      const url = `https://tuta-mnogo-fruta.ru/wp-json/wc/v3/products?page=${page}&per_page=${perPage}`;
      const auth = {
        username: consumer_key,
        password: consumer_secret,
      };

      const response = await axios.get<IProductWp[]>(url, { auth });
      setPageCatalog(response.data);

      const totalPagesFromHeader = response.headers['x-wp-totalpages'];
      if (totalPagesFromHeader) {
        setTotalPages(Number(totalPagesFromHeader));
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getAllCatalog = async () => {
    setLoading(true);
    let allProducts: IProductWp[] = [];
    let page = 1;
  
    try {
      while (true) {
        const url = `https://tuta-mnogo-fruta.ru/wp-json/wc/v3/products?page=${page}&per_page=100`;
        const auth = {
          username: consumer_key,
          password: consumer_secret,
        };
  
        const response = await axios.get<IProductWp[]>(url, { auth });
        allProducts = [...allProducts, ...response.data];
  
        const totalPagesFromHeader = response.headers['x-wp-totalpages'];
        if (!totalPagesFromHeader || page >= Number(totalPagesFromHeader)) {
          break;
        }
  
        page++;
      }
  
      setAllCatalog(allProducts);
      dispatch(setAllProductsStore(allProducts));
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getCatalogCategory = async(id: number, page: number) => {
    setLoading(true);
    try {
      const url = `https://tuta-mnogo-fruta.ru/wp-json/wc/v3/products?category=${id}&page=${page}&per_page=${perPage}`;
      const auth = {
        username: consumer_key,
        password: consumer_secret,
      };

      const response = await axios.get<IProductWp[]>(url, { auth });
      setCategoryCatalog(response.data);
      const totalPagesFromHeader = response.headers['x-wp-totalpages'];
      if (totalPagesFromHeader) {
        setTotalPages(Number(totalPagesFromHeader));
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  return {
    allCatalog,
    getAllCatalog,
    categoryCatalog,
    getCatalogCategory,
    getPageCatalog,
    pageCatalog,
    totalPages,
    loading,
    error,
  };
};