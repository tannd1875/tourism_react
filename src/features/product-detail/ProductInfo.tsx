import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Product } from "../../types/type"; // Adjust the i
import { formatCurrency } from "../../utils/formatting";

const ProductInfo = ({ product }: { product: Product }) => {
  console.log(product);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action: string) => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 h-96">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6 leading-tight">
          {product.name}
        </h1>

        <div className="space-y-3 mb-8">
          <div className="flex items-start">
            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-medium">Mô tả:</span> {product.description}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-3">
            <span className="text-orange-500 text-3xl font-bold">
              {formatCurrency(product.price)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="p-2 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={quantity <= 1}
            >
              <FontAwesomeIcon
                icon={faMinus}
                className="w-4 h-4 text-gray-600"
              />
            </button>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleInputChange}
              className="w-16 text-center py-2 border-0 focus:outline-none focus:ring-0 text-gray-700"
            />

            <button
              onClick={() => handleQuantityChange("increase")}
              className="p-2 hover:bg-gray-100 transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="w-4 h-4 text-gray-600"
              />
            </button>
          </div>

          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Đặt hàng
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          Miễn phí vận chuyển cho đơn hàng trên 500,000đ
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
