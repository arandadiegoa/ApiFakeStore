import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import countSlice from "./countSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    count: countSlice,
    category: categorySlice,
    products: productsSlice,
  },
});

export default store;
