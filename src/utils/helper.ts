import { Cart, CartItem } from "../types/hooks";

export const getTotalPrice = (cart: Cart) => {
  const receipts: Array<{ price: number; quantity: number }> = (
    Array.isArray(cart.items) ? cart.items : []
  ).map((item) => {
    return {
      price: item.product.price,
      quantity: item.quantity,
    };
  });
  return receipts.reduce(
    (acc, receipts) => acc + receipts.price * receipts.quantity,
    0
  );
};

export const getItemTotalPrice = (item: CartItem) => {
  return item.quantity * item.product.price;
};
