import { useEffect, useState } from "react";
import { Cart } from "../../types/hooks";
import { getTotalPrice } from "../../utils/helper";
import { formatCurrency } from "../../utils/formatting";

const CartCollaterals = ({ cart }: { cart: Cart }) => {
  const [totalBill, setTotalBill] = useState(0);
  useEffect(() => {
    setTotalBill(getTotalPrice(cart));
  }, [cart]);
  return (
    <div className="border bg-[#F4F8FF] flex-1 p-4 h-fit">
      <div className="flex justify-between items-center p-2 pt-0">
        <span>TẠM TÍNH</span>
        <span className="font-semibold text-2xl">
          {formatCurrency(totalBill)}
        </span>
      </div>
      <div className="flex justify-between items-center border-t p-2">
        <span>TỔNG</span>
        <span className="font-bold text-2xl text-orange-400">
          {formatCurrency(totalBill)}
        </span>
      </div>
      <button className="py-2 bg-orange-400 text-white w-full mt-2 font-semibold hover:font-bold hover:cursor-pointer hover:scale-105 duration-500">
        Thanh toán
      </button>
    </div>
  );
};

export default CartCollaterals;
