// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      console.log(product);
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeOneItemFromCart(state, action) {
      const idToRemove = action.payload;
      const toBeFiltered = state.items.find((item) => item.id === idToRemove);
      if (toBeFiltered.quantity > 1) {
        toBeFiltered.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== idToRemove);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
        const idToRemove = action.payload;
        state.items = state.items.filter((item) => item.id !== idToRemove);
        localStorage.setItem("cart", JSON.stringify(state.items));
    },
    setCartItems(state, action) {
      state.items = action.payload;
    }
  },
});

export const { addToCart, removeOneItemFromCart, removeFromCart , setCartItems} =
  cartSlice.actions;
export default cartSlice.reducer;
