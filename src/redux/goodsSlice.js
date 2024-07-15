import { API_LOCAL, API_URL } from "../const";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const URL = `${API_URL}/api/products`;
const URL = `${API_LOCAL}/api/products`;


export const fetchGoods = createAsyncThunk(
  "goods/fetchGoods",
  async (params) => {
    const queryString = new URLSearchParams(params).toString();
    const url = `${API_LOCAL}/api/products${queryString ? `?${queryString}` : ""}`;

    return fetch(url)
      .then((response => response.json()))
      .catch((error) => error.message);
});


/*
export const fetchGoods = createAsyncThunk(
  "goods/fetchGoods",
  async (params) => {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(
      `${API_LOCAL}/api/products${queryString ? `?${queryString}` : ""}`,
    );

    if (!response.ok) {
      throw new Error('Ошибка получения товаров в goodsSlice fetchGoods');
    }

    return await response.json();
});
*/


const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = "success"; // succeded successed ?
        state.items = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export default goodsSlice.reducer;
