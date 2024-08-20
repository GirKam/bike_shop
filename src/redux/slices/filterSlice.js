import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 0,
  sort: { name: 'популярности', sortProperty: 'rating' },
  orderType: 'desc',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setOrderType: (state, action) => {
      state.orderType = action.payload;
      console.log(action);
    },
  },
});
export const { setCategories, setSort, setOrderType } = filterSlice.actions;

export default filterSlice.reducer;
