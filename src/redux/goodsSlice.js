import { API_URL } from "../const";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const URL = `${API_URL}/api/products`;


export const fetchGoods = createAsyncThunk(
  "goods/fetchGoods",
  async (params) => {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(
      `${API_URL}/api/products${queryString ? `?${queryString}` : ""}`,
    );

    if (!response.ok) {
      throw new Error('Ошибка получения товаров в goodsSlice fetchGoods');
    }

    return await response.json();
});


const initialState = {
  items: [],
  status: "idle",
  error: null,
};


// state.goods.status = 'idle' | 'loading' | 'success' | 'failed'

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
        state.status = "success"; // ? success succeded successed ?
        state.items = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export default goodsSlice.reducer;
