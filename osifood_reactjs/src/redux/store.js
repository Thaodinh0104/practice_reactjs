import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducer";

export const store = configureStore({
  reducer: { cart: CartSlice },
});
