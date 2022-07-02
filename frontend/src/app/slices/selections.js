import { createSlice } from "@reduxjs/toolkit";

const selectionsSlice = createSlice({
  name: 'selections',
  initialState: {
    selectedProduct: null,
  },
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    }
  }
})

export const { selectProduct } = selectionsSlice.actions;

export default selectionsSlice.reducer;