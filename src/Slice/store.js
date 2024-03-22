// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Assuming you have a file called cartSlice.js where you define your reducer

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
