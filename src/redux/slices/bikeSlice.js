import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBikes = createAsyncThunk('bike/fetchBikesStatus', async (param) => {
  const { category, searchVal, sort, orderType } = param;
  const res = await axios.get(
    `https://66b753847f7b1c6d8f1b9072.mockapi.io/items?${category}${searchVal}&sortBy=${sort.sortProperty}&order=${orderType}`,
  );
  return res.data;
});
const initialState = {
  items: [],
  status: 'loading',
};

export const bikeSlice = createSlice({
  name: 'bike',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.items = action.payload;
        //   state.items.push(action.payload);
        state.status = 'success';
        console.log(state);
      })
      .addCase(fetchBikes.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const { setItems } = bikeSlice.actions;

export default bikeSlice.reducer;
