import { createSlice } from "@reduxjs/toolkit";
import { ProductVariation } from "../hooks/useOneItem";

export interface IItem{
  itemId: number;
  currentItem: ProductVariation | {};
  currentPrices: ProductVariation[] | [];
}

const initialState:IItem ={
  itemId: 0,
  currentItem: {},
  currentPrices: [],
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItemId: (state, action) => {
      state.itemId = action.payload;
    },
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
    setCurrentPrices: (state, action) => {
      state.currentPrices = action.payload;
    },

  },
})

export const { setItemId, setCurrentItem, setCurrentPrices } = itemSlice.actions;
export default itemSlice.reducer;