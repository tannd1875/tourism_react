import Button from "../../components/Button";
import { Cart } from "../../types/hooks";
import CartItemInList from "./CartItem";
import api from "../../services/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux/store";

const CartList = ({ cart, loading }: { cart: Cart; loading: boolean }) => {
  const isChangeValue = useSelector(
    (state: RootState) => state.cart.isChangeValue
  );
  const productsChanged = useSelector(
    (state: RootState) => state.cart.productsChanged
  );
  const handleSubmit = async () => {
    if (isChangeValue) {
      const response = await api.put("/cart", { items: productsChanged });
      if (response.status === 200) {
        window.location.reload();
      }
    }
  };
  return (
    <div>
      <table className="">
        <thead className="p-4 text-xl">
          <tr className="py-4">
            <th className="text-left pl-4">Sản phẩm</th>
            <th>Số lượng</th>
            <th className="text-right pr-4">Tạm tính</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            cart &&
            Array.isArray(cart.items) &&
            cart.items.map((item) => (
              <CartItemInList cartProduct={item} key={item._id} />
            ))}
          {loading && (
            <tr>
              <td colSpan={3}>
                <p>Loading...</p>
              </td>
            </tr>
          )}
          {!loading && (!cart || !cart.items || cart.items.length === 0) && (
            <tr>
              <td colSpan={3}>
                <p>Không có sản phẩm trong giỏ hàng.</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Button
        onClick={handleSubmit}
        variant="info"
        className={`float-right ${
          !isChangeValue &&
          "hover:scale-none hover:font-normal hover:cursor-not-allowed"
        }`}
      >
        Cập nhật
      </Button>
    </div>
  );
};

export default CartList;
