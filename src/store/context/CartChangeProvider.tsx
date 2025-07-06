import React, { useState } from "react";
import { CartChangeContext } from "./context";
import { ProductInfo } from "../../types/context";

const CartChangeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isChangeValue, setIsChangeValue] = useState(false);
  const [productChanged, setProductChanged] = useState<Array<ProductInfo>>([]);
  return (
    <CartChangeContext.Provider
      value={{
        isChangeValue: isChangeValue,
        setIsChangeValue: setIsChangeValue,
        productChanged: productChanged,
        setProductChanged: setProductChanged,
      }}
    >
      {children}
    </CartChangeContext.Provider>
  );
};

export default CartChangeProvider;
