import { createSlice } from "@reduxjs/toolkit";

interface ICatogInitial{
  currentCatalog: string;
}

const initialState:ICatogInitial = {
  currentCatalog: '',
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCurrentCatalog: (state, action) => {
      state.currentCatalog = action.payload;
    }
  },
})

export const { setCurrentCatalog } = catalogSlice.actions;
export default catalogSlice.reducer;