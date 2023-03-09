import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === product._id);
      if (existingItem) {
        existingItem.quantity++;
      } else state.cartItems.push({ ...product, quantity: 1 });
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.loading = false;
      state.totalPrice = 0;
    },
    fetchCartSuccess(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const { addItem, clearCart, fetchCartSuccess } = cartSlice.actions;

export default cartSlice.reducer;
