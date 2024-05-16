import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  brands: [],
  products: [],
  categories: [],
  purchases: [],
  sales: [],
  stock: [],
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
      if (path === "products") {
        // product page içinde alış ve satış bilgilerini ekleme
        const ubdateProduct = stockData.map((product) => {
          const purchasesProduct = state.purchases.filter(
            (purchase) => purchase.productId === product._id
          );
          const salesProduct = state.sales.filter(
            (sale) => sale.productId === product._id
          );
          return {
            ...product,
            purchases: purchasesProduct,
            sales: salesProduct,
            stock:
              purchasesProduct.reduce(
                (sum, purchase) => sum + purchase.amount,
                0
              ) - salesProduct.reduce((sum, sale) => sum + sale.amount, 0),
          };
         
        });
        state[path] = ubdateProduct;
      } else {
        state[path] = stockData;
      }
      
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getApiStockSuccess, fetchFail } = stockSlice.actions;

export default stockSlice.reducer;
