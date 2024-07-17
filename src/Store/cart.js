import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  quantity: 0,
  Cartshow: false,
  count:0
};

const CartSlice = createSlice({
  name: 'Cart',
  initialState: initialCartState,
  reducers: {
    toggle(state){
        state.Cartshow = !state.Cartshow
    },
    increase(state) {
      state.count++;
    },
    decrement(state) {
      if (state.quantity > 0) {
        state.quantity--;
      }
    },
    increment(state) {
      state.quantity++;
    },
    addItem(state, action) {
      const existingItemIndex = state.items.findIndex(item => item.Title === action.payload.Title);
      if (existingItemIndex >= 0) {
        // If item exists, increase its quantity
        state.items[existingItemIndex].quantity++;
      } else {
        // If item doesn't exist, add it with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(item => item.Title === action.payload);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice;
