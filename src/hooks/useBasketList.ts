import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import axios from "axios";

export const UseBasketList = () => {
  const BasketState = useSelector((state: RootState) => state.basket);
  const [item, setItem] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const consumer_key = "ck_db1b37ff5e14c628dbaaadf3de6d27e76d0806aa";
        const consumer_secret = "cs_0b918664f2ec0b7e6ac4e64f51defa60ae86e03a";
        const auth = {
          username: consumer_key,
          password: consumer_secret,
        };
    
        const requests = BasketState.map(item => {
          const url = `https://tuta-mnogo-fruta.ru/wp-json/wc/v3/products/${item.id}`;
          const url_variation = `https://tuta-mnogo-fruta.ru/wp-json/wc/v3/products/${item.id}/variations`;
    
          return Promise.all([
            axios.get(url, { auth: auth }), 
            axios.get(url_variation, { auth: auth })
          ]);
        });
    
        const responses = await Promise.all(requests);
    
        const allData = responses.map(([productResponse, variationsResponse]) => ({
          product: productResponse.data,
          variations: variationsResponse.data
        }));
    
        setItem(allData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [BasketState]);

  return { item, loading, error };
};