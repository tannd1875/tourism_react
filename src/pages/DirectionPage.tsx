import { useEffect, useState } from "react";
import FilterBox from "../features/direction-filter/FilterBox";
import DirectionList from "../layout/DirectionList";
import { useSearchParams } from "react-router-dom";
import { DirectionFilterContext } from "../store/context/filterContext";
import useFetchList from "../hooks/useFetchList";
import useQuery from "../hooks/useQuery";
import Heading from "../components/Heading";
import Pagination from "../features/pagination/Pagination";
import { Direction } from "../types/type";

const DirectionListPage = () => {
  const [searchParams] = useSearchParams();
  const directionParam = searchParams.get("direction");
  const addressParam = searchParams.get("address");

  const filter: Record<string, string> = {};
  filter.page = "1";
  filter.limit = "3";

  if (directionParam) filter.q = directionParam;
  if (addressParam) filter.address = addressParam;

  const [query, updateQuery, resetQuery] = useQuery(filter);

  const [directionList, total] = useFetchList({
    path: "/direction",
    query: query,
  });
  const [classifyBy, setClassifyBy] = useState<Array<string>>([]);
  const [locationBy, setLocationBy] = useState<Array<string>>([]);
  const [isActiveFilter, setIsActiveFilter] = useState(
    addressParam != null ? true : false
  );

  const handlePageChange = (value: number) => {
    updateQuery({ page: value });
  };

  useEffect(() => {
    if (addressParam) {
      setLocationBy([addressParam]);
    }
  }, [addressParam]);

  return (
    <>
      <div className="mt-28 lg:w-4/5 mx-auto w-full">
        <Heading type="direction" count={total} />

        <div className="lg:flex lg:justify-between lg:items-start lg:flex-1">
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
              addressParam,
            }}
          >
            <FilterBox />
          </DirectionFilterContext.Provider>
          <DirectionList items={directionList as Direction[]} />
        </div>
        <Pagination
          onPageChange={handlePageChange}
          totalPage={Math.ceil(total / 3)}
        />
      </div>
    </>
  );
};

export default DirectionListPage;
