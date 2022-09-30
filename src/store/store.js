import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shoppping-cart/cartSlice";
import cartUiSlice from "./shoppping-cart/CartUISlice";
const store = configureStore({
   reducer: {
      cart: cartSlice.reducer,
      cartUi: cartUiSlice.reducer,
   },
});
export default store;
