import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice.ts';
import cartSlice from './slices/cartSlice.ts';
import bikeSlice from './slices/bikeSlice.ts';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    bike: bikeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
