import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "bouquets", // todo по умолчанию ни один filterType не выбран ищем все товары
  minPrice: "", // минимальная цена в фильтрах
  maxPrice: "", // Максимальная цена в фильтрах
  category: "", // категория букетов
  title: "",
  // siteTitle: 'Товары',
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeType(state, action) {
      // меняем тип товаров через FilterRadio очищаем остальные фильтры
      state.type = action.payload;
      state.minPrice = "";
      state.maxPrice = "";
      state.category = "";
    },
    changePrice(state, action) {
      state[action.payload.name] = action.payload.value;
    },
  },
});


export const { changeType, changePrice } = filtersSlice.actions;

export default filtersSlice.reducer;
