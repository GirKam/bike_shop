import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Sorted = {
  name: string;
  sortProperty: 'rating' | 'price' | 'title';
};
interface FilterSlice {
  searchValue: string;
  categories: number;
  sort: Sorted;
  orderType: string;
}

const initialState: FilterSlice = {
  searchValue: '',
  categories: 0,
  sort: { name: 'популярности', sortProperty: 'rating' },
  orderType: 'desc',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<number>) => {
      state.categories = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSort: (state, action: PayloadAction<Sorted>) => {
      state.sort = action.payload;
    },
    setOrderType: (state, action: PayloadAction<string>) => {
      state.orderType = action.payload;
    },
  },
});
export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
export const { setCategories, setSort, setOrderType, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
