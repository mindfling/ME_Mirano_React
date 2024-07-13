// открыть закрыть Cart корзину заказа через Redux
// добавить Заказ в Cart корзину через Redux
// изменять количество шт Товара через Redux
import { createSlice } from "@reduxjs/toolkit";

const KEY = "cartItems";

const initialState = {
  isOpen: false,
  items: JSON.parse(localStorage.getItem(KEY) || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen;
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
        // если такой товар уже есть досчитываем
        existingItem.count = count;
      } else {
        // если такого товара в заказе нет то добавляем
        state.items.push({ id, note, img, title, dateDelivery, price, count, });
      }
      // запис обратно в хранилище обновленный Заказ
      localStorage.setItem(KEY, JSON.stringify(state.items));
    },
  },
});


export const { toggleCart, addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
