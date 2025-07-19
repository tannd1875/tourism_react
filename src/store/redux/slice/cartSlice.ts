import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInfo } from "../../../types/context";

type CartState = {
  isChangeValue: boolean;
  productsChanged: Array<ProductInfo>;
};

const INIT_CART_STATE: CartState = {
  isChangeValue: false,
  productsChanged: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INIT_CART_STATE,
  reducers: {
    markCartAsChanged: (state) => {
      state.isChangeValue = true;
    },
    markCartAsUnchanged: (state) => {
      state.isChangeValue = false;
    },
    quantityChange: (state, action: PayloadAction<ProductInfo>) => {
      if (action.payload.quantity <= 0) return;
      const existing = state.productsChanged.find(
        (product) => product.id === action.payload.id
      );

      if (existing) {
        existing.quantity = action.payload.quantity;
      } else {
        state.productsChanged.push(action.payload);
      }
    },
  },
});

export default cartSlice.reducer;
export const { markCartAsChanged, markCartAsUnchanged, quantityChange } =
  cartSlice.actions;
