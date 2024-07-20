import axios from "axios";
import { useEffect, useState } from "react";
import { PastilaItem } from "../content/IProducts";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setPagesLimit } from "../store/catalog";


export const useProducts = () => {
  const [products, setProducts] = useState<PastilaItem[]>([]);
  const dispatch = useDispatch<AppDispatch>();
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
      setProducts(response.data.arr);
      dispatch(setPagesLimit(response.data.howManyPages))
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
  }, [CatalogState.currentCatalog,CatalogState.page]);

  return products;
}