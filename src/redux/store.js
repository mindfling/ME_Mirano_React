import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import goodsReducer from "./goodsSlice";
import filtersReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    goods: goodsReducer,
    filters: filtersReducer,
  },
});

export default store;
