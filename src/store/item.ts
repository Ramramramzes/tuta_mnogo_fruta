import { createSlice } from "@reduxjs/toolkit";

interface IItem{
  itemId: number;
}

const initialState:IItem ={
  itemId: 0,
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItemId: (state, action) => {
      state.itemId = action.payload;
    }
  },
})

export const { setItemId } = itemSlice.actions;
export default itemSlice.reducer;