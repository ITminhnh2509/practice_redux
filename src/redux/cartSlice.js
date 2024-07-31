import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")),
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteCart(state, action) {
      state.cart = state.cart.filter((cart) => cart.id === action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});
export const { addCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
