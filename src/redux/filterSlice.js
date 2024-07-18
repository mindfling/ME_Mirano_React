import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  filters: {
    type: 'none',
    minPrice: 0,
    maxPrice: '',
    category: '',
    title: '',
  },
  siteTitle: 'Товары',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTitle(state, action) {
      state.siteTitle = action.payload.title;
    }
  },
});

export const { changeTitle } = filterSlice.actions

export default filterSlice.reducer