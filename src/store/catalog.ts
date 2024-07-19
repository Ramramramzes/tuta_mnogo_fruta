import { createSlice } from "@reduxjs/toolkit";

interface ICatogInitial{
  currentCatalog: string;
  page:number;
}

const initialState:ICatogInitial = {
  currentCatalog: '',
  page: 1,

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
  },
})

export const { setCurrentCatalog, setPage } = catalogSlice.actions;
export default catalogSlice.reducer;