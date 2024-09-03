import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  type: string;
  count: number;
};

interface CartSlice {
  totalPrice: number;
  items: CartItem[];
}
const initialState: CartSlice = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      findItem
        ? findItem.count++
        : state.items.push({
            ...action.payload,
            count: 1,
          });
      state.totalPrice = state.items.reduce((prev, item) => {
        return item.price * item.count + prev;
      }, 0);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },

    minusItem: (state, action: PayloadAction<number>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },

    clearItem: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItem = (id: number) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
