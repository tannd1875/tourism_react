import CartCollaterals from "../features/cart/CartCollaterals";
import CartList from "../features/cart/CartList";
import useFetchItem from "../hooks/useFetchItem";
import { Cart } from "../types/hooks";

const CartPage = () => {
  const [cart, loading] = useFetchItem({
    path: `/cart/userCart`,
    query: {},
  });

  return (
    <div className="mt-36 lg:w-4/5 mx-auto w-full">
      <p className="font-semibold text-5xl text-center text-gray-400">
        Giỏ hàng
      </p>

      <div className="mt-4 flex gap-6">
        <CartList cart={cart as Cart} loading={loading} />
        <CartCollaterals cart={cart as Cart} />
      </div>
    </div>
  );
};

export default CartPage;
