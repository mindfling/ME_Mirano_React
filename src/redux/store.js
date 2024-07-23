import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice";
import order from "./orderSlice";
import goods from "./goodsSlice";
import filters from "./filtersSlice";

// так тоже можно ;)
const store = configureStore({
  reducer: {
    cart,
    order,
    goods,
    filters,
  },
});

export default store;
