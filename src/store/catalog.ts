import { createSlice } from "@reduxjs/toolkit";
import { IProductWp } from "../interfaces/product";


export interface ICatogInitial{
  currentCatalog: string;
  tag: null | number;
  page:number;
  pagesLimit:number;
  allProducts: IProductWp[]
}

const initialState:ICatogInitial = {
  currentCatalog: '',
  tag: null,
  page: 1,
  pagesLimit:1,
  allProducts: []

}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCurrentCatalog: (state, action) => {
      state.currentCatalog = action.payload;
    },
    setCurrentTag: (state, action) => {
      state.tag = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPagesLimit: (state, action) => {
      state.pagesLimit = action.payload;
    },
    setAllProductsStore: (state, action) => {
      state.allProducts = action.payload;
    }
  },
})

export const { setCurrentCatalog, setCurrentTag, setPage, setPagesLimit, setAllProductsStore} = catalogSlice.actions;
export default catalogSlice.reducer;