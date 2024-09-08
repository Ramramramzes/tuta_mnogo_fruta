import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBasketItem {
  id: number;
  quantity: number;
  size: string;
}

const initialState: IBasketItem[] = [];

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IBasketItem>) => {
      const itemIndex = state.findIndex(item => item.size === action.payload.size && item.id === action.payload.id);
      if (itemIndex === -1) {
        state.push(action.payload);
      } else {
        state[itemIndex].quantity = action.payload.quantity;
      }
    },
    removeFromBasket: (state, action) => {
      return state.filter(item => !(item.size === action.payload.size && item.id === action.payload.id));
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;