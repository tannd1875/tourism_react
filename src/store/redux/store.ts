import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import profileSlice from "./slice/profileSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    profile: profileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
