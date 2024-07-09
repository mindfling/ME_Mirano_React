// открыть закрыть Cart корзину заказа через Redux
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // modal is closed by default
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // reducer - эт фк котор меняют наше состояни state
  reducers: {
    toggleCart(state, action) {
      state.isOpen = !state.isOpen;
    },
  },
});


export const {toggleCart} = cartSlice.actions;

export default cartSlice.reducer;
