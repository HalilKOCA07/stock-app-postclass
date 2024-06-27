import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  sales: [],
  brands: [],
  categories: [],
  products: [],
  purchases: [],
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

    getStockSuccess: (state, { payload: { path, stockData } }) => {
      state.loading = false;
      state[path] = stockData;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { fetchStart, getStockSuccess, fetchFail } = stockSlice.actions;
export default stockSlice.reducer;
