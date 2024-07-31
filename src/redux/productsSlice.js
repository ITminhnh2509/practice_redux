import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [
    { id: 1, name: "Minh", price: 20, checked: false },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      const biggestID =
        state.products.reduce((a, b) => Math.max(b.id, a), 0) + 1;
      const newProduct = {
        id: biggestID,
        name: action.payload.name,
        checked: false,
        price: 30,
      };
      state.products.push(newProduct);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("products", JSON.stringify(state.products));
    },

    editProduct(state, action) {
      state.products = state.products.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.name }
          : item
      );
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addProduct, deleteProduct, editProduct } = productsSlice.actions;
export default productsSlice.reducer;
