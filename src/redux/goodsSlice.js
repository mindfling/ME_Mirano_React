import { API_LOCAL, API_URL } from "../const";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const URL = `${API_LOCAL}/api/products`;
console.log('URL: ', URL);

export const fetchGoods = createAsyncThunk("goods/fetchGoods",
  async () => {
    const response = fetch(`${API_LOCAL}/api/products`);
    console.log('response: ', response);
    console.log(response.ok);

    const answerJson = (await response).json();
    console.log('answerJson: ', answerJson);

    return answerJson;
});


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
        console.log('loading');
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = "success"; // success
        state.items = action.payload;
        console.log('success');
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(state.status, 'failed errer message', action, action.error, action.error.message);
      });
  },
});


export default goodsSlice.reducer;