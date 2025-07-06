import { ReactNode, useState } from "react";
import { QueryResetter, QueryUpdater } from "../../hooks/useQuery";
import { ProductFilterContext } from "./context";

const ProductFilterProvider = ({
  children,
  query,
  updateQuery,
  resetQuery,
}: {
  children: ReactNode;
  query: object;
  updateQuery: QueryUpdater;
  resetQuery: QueryResetter;
}) => {
  const [classifyBy, setClassifyBy] = useState<string[]>([]);
  const [brandBy, setBrandBy] = useState<string[]>([]);
  const [isActiveFilter, setIsActiveFilter] = useState<boolean>(false);
  return (
    <ProductFilterContext.Provider
      value={{
        classifyBy,
        setClassifyBy,
        brandBy,
        setBrandBy,
        isActiveFilter,
        setIsActiveFilter,
        query,
        updateQuery,
        resetQuery,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};

export default ProductFilterProvider;
