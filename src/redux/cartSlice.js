// открыть закрыть Cart корзину заказа через Redux
import { createSlice } from "@reduxjs/toolkit";
// import { goodsArray } from "../goodsArray";

const KEY = "cartItems";

const initialState = {
  // modal is closed by default
  isOpen: false,
  // загружаем из localStorage
  items: JSON.parse(localStorage.getItem(KEY) || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // reducer - эт фк котор меняют наше состояни state
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen;

      // ttodo DEBUG
      // localStorage.setItem(KEY, JSON.stringify(goodsArray))
    },
    addItemToCart(state, action) {
      const {
        id,
        note,
        img,
        title,
        dateDelivery,
        price,
        count = 1,
      } = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count = count; // если такой товар уже есть досчитываем
      } else {
        // если такого товара в заказе нет то добавляем
        state.items.push({ id, note, img, title, dateDelivery, price, count, });
      }

      localStorage.setItem(KEY, JSON.stringify(state.items));
    },
  },
});

export const { toggleCart, addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
