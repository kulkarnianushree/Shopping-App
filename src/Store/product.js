import { createSlice } from '@reduxjs/toolkit';

const initialProductState = { Product: [] };

const ProductSlice = createSlice({
  name: 'Product',
  initialState: initialProductState,
  reducers: {
    transfer(state, action) {
      state.Product.push(action.payload); // Add the product to the array
    },
  },
});

export const ProductAction = ProductSlice.actions;
export default ProductSlice;
