// открываем или закрываем модальное окно Oder
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isOpen: false,
}


const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
      console.log('open Modal state is', state.isOpen);
    },
    closeModal(state) {
      state.isOpen = false;
      console.log('close Modal state is', state.isOpen);
    },
  }
});

export const {openModal, closeModal} = orderSlice.actions

export default orderSlice.reducer
