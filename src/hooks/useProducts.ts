import axios from "axios";
import { useEffect, useState } from "react";
import { PastilaItem } from "../content/IProducts";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";


export const useProducts = () => {
  const [products, setProducts] = useState<PastilaItem[]>([]);
  const CatalogState = useSelector((state: RootState) => state.catalog);

  useEffect(() => {
    axios
    .get('/products',{
      params:{
        catalog: CatalogState.currentCatalog,
        page: CatalogState.page
      }
    })
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
  }, [CatalogState.currentCatalog,CatalogState.page]);

  return products;
}