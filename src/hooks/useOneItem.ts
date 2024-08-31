import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import axios from "axios";
import { ProductVariation } from "../interfaces/variation";



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