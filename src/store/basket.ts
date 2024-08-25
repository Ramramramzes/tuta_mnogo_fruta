import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBasketItem {
  size: string;
  price: number;
  quantity: number;
  name: string;
  id: number;
}

const initialState: IBasketItem[] = [];

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IBasketItem>) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex === -1) {
        state.push(action.payload);
      } else {
        state[itemIndex].quantity = action.payload.quantity;
      }
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;