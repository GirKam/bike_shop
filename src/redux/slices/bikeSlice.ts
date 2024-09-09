import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { Sorted } from './filterSlice';

type FetchBikeI = {
  category: string;
  searchVal: string;
  sort: Sorted;
  orderType: string;
};
export const fetchBikes = createAsyncThunk<BikeItem[], FetchBikeI>(
  'bike/fetchBikesStatus',
  async (param) => {
    const { category, searchVal, sort, orderType } = param;
    const res = await axios.get(
      `https://66b753847f7b1c6d8f1b9072.mockapi.io/items?${category}${searchVal}&sortBy=${sort.sortProperty}&order=${orderType}`,
    );

    return res.data;
  },
);

type BikeItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface BikeSlice {
  items: BikeItem[];
  status: Status;
}

const initialState: BikeSlice = {
  items: [],
  status: Status.LOADING,
};

export const bikeSlice = createSlice({
  name: 'bike',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<BikeItem[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchBikes.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const selectBike = (state: RootState) => state.bike;
export const { setItems } = bikeSlice.actions;

export default bikeSlice.reducer;
