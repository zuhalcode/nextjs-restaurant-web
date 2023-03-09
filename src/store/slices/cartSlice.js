import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  loading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartSuccess(state, action) {
      state.cartItems = action.payload;
    },

    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === product._id);
      if (existingItem) {
        existingItem.quantity++;
      } else state.cartItems.push({ ...product, quantity: 1 });
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.loading = false;
    },

    cartStart(state) {
      state.loading = true;
    },
    cartSuccess(state) {
      state.loading = false;
    },
  },
});

export const { addItem, clearCart, fetchCartSuccess, cartStart, cartSuccess } =
  cartSlice.actions;

export default cartSlice.reducer;
