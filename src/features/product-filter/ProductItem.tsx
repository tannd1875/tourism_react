import {
  faCartPlus,
  faCircleInfo,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "../../utils/formatting";
import Button from "../../components/Button";
import { Product } from "../../types/type";
import useLocalStorage from "../../hooks/useLocalStorage";
import api from "../../services/axios";

const ProductItem = ({ product }: { product: Product }) => {
  const [isAuth] = useLocalStorage("isAuth");
  const handleSubmitCart = () => {
    if (JSON.parse(isAuth) === false) {
      window.location.href = "/login";
    } else {
      api.post("/cart", {
        productId: product._id,
        quantity: 1,
      });
    }
  };
  return (
    <div className="rounded-md my-4 border-2 border-t-0 hover:font-normal text-center w-64 overflow-hidden">
      <div className="w-64 h-64 overflow-hidden mx-auto rounded-t-md">
        <img
          className="w-full h-full object-cover"
          src={product.images[0]}
          alt={product.name}
        />
      </div>
      <div className="w-64 mx-auto">
        <div className="text-xl mb-4 mt-8 mx-2">
          <h2 className="font-bold truncate">{product.name}</h2>
          <span className="font-semibold mb-4 truncate">{product.brand}</span>
          <div className="mb-2">
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="mr-2 inline-block text-green-300"
            />
            <span className="inline-block">
              {formatCurrency(product.price)}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="add_to_cart" onClick={handleSubmitCart}>
            <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
            <span className="inline-block ">Thêm vào giỏ hàng</span>
          </Button>
          <Button
            variant="add_to_cart"
            className="border-none relative"
            to={`/product-detail/?id=${product._id}`}
          >
            <FontAwesomeIcon icon={faCircleInfo} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
