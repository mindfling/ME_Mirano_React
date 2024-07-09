// открываем или закрываем модальное окно Oder
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isOpen: false, // изначально корзина с заказами закрыта
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    toggleModal(state) {
      state.isOpen = !state.isOpen;
    },
  }
});

export const { openModal, closeModal, toggleModal } = orderSlice.actions

export default orderSlice.reducer
