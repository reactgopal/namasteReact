import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import the reducer from the slice

const appStore = configureStore({
  reducer: {
    cart: cartReducer, // Use the cartReducer here
  },
});

export default appStore;
