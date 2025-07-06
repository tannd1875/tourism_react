import CartCollaterals from "../features/cart/CartCollaterals";
import CartList from "../features/cart/CartList";
import useFetchItem from "../hooks/useFetchItem";
import useLocalStorage from "../hooks/useLocalStorage";
import { Cart } from "../types/hooks";
import CartChangeProvider from "../store/context/CartChangeProvider";

const CartPage = () => {
  const [user] = useLocalStorage("user");

  const [cart, loading] = useFetchItem({
    path: `/cart/${JSON.parse(user).id}`,
    query: {},
    config: {
      headers: {
        Authorization: `Bearer ${JSON.parse(user).accessToken}`,
      },
    },
  });

  return (
    <div className="mt-36 lg:w-4/5 mx-auto w-full">
      <p className="font-semibold text-5xl text-center text-gray-400">
        Giỏ hàng
      </p>

      <div className="mt-4 flex gap-6">
        <CartChangeProvider>
          <CartList cart={cart as Cart} loading={loading} />
          <CartCollaterals cart={cart as Cart} />
        </CartChangeProvider>
      </div>
    </div>
  );
};

export default CartPage;
