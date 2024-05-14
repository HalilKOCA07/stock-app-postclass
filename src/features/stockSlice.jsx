import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  brands:[],
  products:[],
  categories:[],
  purchases:[],
  sales:[],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getApiStockSuccess: (state, { payload: { path, stockData } }) => {
      state.loading = false;
      state[path] = stockData;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getApiStockSuccess, fetchFail } = stockSlice.actions;

export default stockSlice.reducer;
