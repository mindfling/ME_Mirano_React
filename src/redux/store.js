import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import goodsReducer from "./goodsSlice";

const store = configureStore({
  reducer: {
    // modal: modalReducer
    cart: cartReducer,
    order: orderReducer,
    goods: goodsReducer,
  },
});

export default store;
