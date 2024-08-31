import { createSlice } from "@reduxjs/toolkit";
import { IProductWp } from "../interfaces/product";


export interface ICatogInitial{
  currentCatalog: string;
  page:number;
  pagesLimit:number;
  allProducts: IProductWp[]
}

const initialState:ICatogInitial = {
  currentCatalog: '',
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
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPagesLimit: (state, action) => {
      state.pagesLimit = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    }
  },
})

export const { setCurrentCatalog, setPage, setPagesLimit, setAllProducts} = catalogSlice.actions;
export default catalogSlice.reducer;