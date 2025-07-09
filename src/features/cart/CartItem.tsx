import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartItem } from "../../types/hooks";
import { formatCurrency } from "../../utils/formatting";
import { useContext, useState } from "react";
import { getItemTotalPrice } from "../../utils/helper";
import { CartChangeContext } from "../../store/context/context";
import { ProductInfo } from "../../types/context";
import api from "../../services/axios";
import useLocalStorage from "../../hooks/useLocalStorage";

const CartItemInList = ({ cartProduct }: { cartProduct: CartItem }) => {
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const { setIsChangeValue, setProductChanged, productChanged } =
    useContext(CartChangeContext);
  const [user] = useLocalStorage("user");

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    setIsChangeValue(true);

    const newProductChanged: ProductInfo = {
      id: cartProduct.product._id, // productId
      quantity: newQuantity,
    };
    const temp = productChanged;
    const pos = productChanged.findIndex(
      (product) => product.id === newProductChanged.id
    );
    if (pos > -1) {
      temp[pos].quantity = newProductChanged.quantity;
    } else {
      temp.push(newProductChanged);
    }
    setProductChanged(temp);
  };

  const deleteProduct = async () => {
    const response = await api.put("/cart/delete", {
      productId: cartProduct.product._id,
      userId: JSON.parse(user).id,
    });
    if (response.status === 200) {
      window.location.reload();
    }
  };
  return (
    <tr className="h-fit py-4 border-y hover:cursor-pointer relative">
      <td className="p-4">
        <div className="flex gap-6 items-center">
          <div className="w-24 aspect-square overflow-hidden">
            <img
              src={cartProduct.product.images[0]}
              alt={cartProduct.product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-semibold text-3xl">
              {cartProduct.product.name}
            </h2>
            <span>{formatCurrency(cartProduct.product.price)}</span>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center border border-gray-300 rounded-md w-fit mx-auto">
          <button
            onClick={() => {
              handleQuantityChange(quantity - 1);
            }}
            className="p-2 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={quantity == 1}
          >
            <FontAwesomeIcon icon={faMinus} className="w-4 h-4 text-gray-600" />
          </button>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => {
              handleQuantityChange(Number(e.target.value));
            }}
            className="w-16 text-center py-2 border-0 focus:outline-none focus:ring-0 text-gray-700"
          />

          <button
            onClick={() => {
              handleQuantityChange(quantity + 1);
            }}
            className="p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </td>
      <td className="text-right p-4">
        <span className="font-bold text-3xl text-orange-400">
          {formatCurrency(getItemTotalPrice(cartProduct))}
        </span>
      </td>
      <td>
        <button
          className="absolute border w-6 aspect-square right-0 top-1 font-bold hover:bg-red-500 hover:text-white"
          onClick={deleteProduct}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default CartItemInList;
