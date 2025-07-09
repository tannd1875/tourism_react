import { ReactNode, useEffect, useState } from "react";
import { QueryResetter, QueryUpdater } from "../../hooks/useQuery";
import { DirectionFilterContext } from "./context";

export const DirectionFilterProvider = ({
  children,
  query,
  updateQuery,
  resetQuery,
  provinceParam,
}: {
  children: ReactNode;
  query: object;
  updateQuery: QueryUpdater;
  resetQuery: QueryResetter;
  provinceParam: string | null;
}) => {
  const [classifyBy, setClassifyBy] = useState<Array<string>>([]);
  const [locationBy, setLocationBy] = useState<Array<string>>([]);
  const [isActiveFilter, setIsActiveFilter] = useState(
    provinceParam ? true : false
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (provinceParam) {
      setLocationBy([provinceParam]);
    }
  }, [provinceParam]);

  return (
    <DirectionFilterContext.Provider
      value={{
        classifyBy,
        setClassifyBy,
        locationBy,
        setLocationBy,
        isActiveFilter,
        setIsActiveFilter,
        query,
        updateQuery,
        resetQuery,
        provinceParam,
        page,
        setPage,
      }}
    >
      {children}
    </DirectionFilterContext.Provider>
  );
};

export default DirectionFilterContext;
