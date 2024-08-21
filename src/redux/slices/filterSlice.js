import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  categories: 0,
  sort: { name: 'популярности', sortProperty: 'rating' },
  orderType: 'desc',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setOrderType: (state, action) => {
      state.orderType = action.payload;
    },
  },
});
export const selectFilter = (state) => state.filter;
export const { setCategories, setSort, setOrderType, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
