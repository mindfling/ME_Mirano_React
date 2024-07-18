// открыть закрыть Cart корзину заказа через Redux
// добавить Заказ в Cart корзину через Redux
// изменять количество шт Товара через Redux
// регистрировать корзину через Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../const";

export const registerCart = createAsyncThunk("cart/registerCart", async () => {
  const response = await fetch(`${API_URL}/api/cart/register`, {
    method: "POST",
    credentials: "include", // for working with Cookies
  });
  
  return await response.json();
});

const KEY = "cartItems";

const initialState = {
  isOpen: false,
  items: JSON.parse(localStorage.getItem(KEY) || "[]"),
  status: "idle",
  accessKey: null,
  error: null,
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
        state.items.push({ id, note, img, title, dateDelivery, price, count });
      }
      // запис обратно в хранилище обновленный Заказ
      localStorage.setItem(KEY, JSON.stringify(state.items));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("registerCart/pending", (state) => {
        state.status = "loading";
      })
      .addCase("registerCart/fulfilled", (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase("registerCart/rejected", (state, action) => {
        state.status = "failed";
        state.accessKey = "";
        state.error = action.error.message;
      });
  },
});

export const { toggleCart, addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
