import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  priceChoice: true,
  typeChoice: false,
}

const choiceSlice = createSlice({
  name: 'choice',
  initialState,
  reducers: {
    
  }
});

export const { choice } = choiceSlice.actions

export default choiceSlice.reducer