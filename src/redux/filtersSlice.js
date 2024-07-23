import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "bouquets", // todo по умолчанию ни один filterType не выбран ищем все товары
  minPrice: "", // минимальная цена в фильтрах
  maxPrice: "", // Максимальная цена в фильтрах
  category: "", // категория букетов
  title: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeType(state, action) {
      // меняем тип товаров через FilterRadio очищаем остальные фильтры
      // state.type = action.payload;
      state.type = action.payload.value;
      console.log('changeType action.payload: ', action.payload);
      state.minPrice = "";
      state.maxPrice = "";
      state.category = "";
    },
    changePrice(state, action) {
      console.log('changePrice action.payload: ', action.payload);
      state[action.payload.name] = action.payload.value;
    },
  },
});


export const { changeType, changePrice } = filtersSlice.actions;

export default filtersSlice.reducer;
