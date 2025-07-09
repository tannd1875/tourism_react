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
  const [page, setPage] = useState(1);
  return (
    <ProductFilterContext.Provider
      value={{
        classifyBy,
        setClassifyBy,
        brandBy,
        setBrandBy,
        isActiveFilter,
        setIsActiveFilter,
        page,
        setPage,
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
