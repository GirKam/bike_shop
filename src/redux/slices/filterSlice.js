import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 0,
  sort: { name: 'популярности', sortProperty: 'rating' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.category = action.payload;
      console.log(action);
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});
export const { setCategories, setSort } = filterSlice.actions;

export default filterSlice.reducer;
