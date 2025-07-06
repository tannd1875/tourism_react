import FilterBox from "../layout/FilterBox";
import DirectionList from "../layout/DirectionList";
import { useSearchParams } from "react-router-dom";
import { DirectionFilterProvider } from "../store/context/DirectionFilterProvider";
import useFetchList from "../hooks/useFetchList";
import useQuery from "../hooks/useQuery";
import Heading from "../components/Heading";
import Pagination from "../features/pagination/Pagination";
import { Direction } from "../types/type";
import ClassifyFilterForm from "../features/direction-filter/ClassifyFilterForm";
import LocationFilterForm from "../features/direction-filter/LocationFilterForm";

const DirectionListPage = () => {
  const [searchParams] = useSearchParams();
  const directionParam = searchParams.get("direction");
  const provinceParam = searchParams.get("province");

  const filter: Record<string, string> = {};
  filter.page = "1";
  filter.limit = "8";

  if (directionParam) filter.q = directionParam;
  if (provinceParam) filter.province = provinceParam;

  const [query, updateQuery, resetQuery] = useQuery(filter);

  const [directionList, total] = useFetchList({
    path: "/direction",
    query: query,
  });

  const handlePageChange = (value: number) => {
    updateQuery({ page: value });
  };

  return (
    <div className="mt-28 lg:w-4/5 mx-auto w-full">
      <Heading type="direction" count={total} />

      <div className="lg:flex lg:justify-between lg:items-start lg:flex-1">
        <DirectionFilterProvider
          query={query}
          updateQuery={updateQuery}
          resetQuery={resetQuery}
          provinceParam={provinceParam}
        >
          <FilterBox submitFor="direction">
            <ClassifyFilterForm />
            <LocationFilterForm />
          </FilterBox>
        </DirectionFilterProvider>
        <DirectionList items={directionList as Direction[]} />
      </div>
      <Pagination
        onPageChange={handlePageChange}
        totalPage={Math.ceil(total / 8)}
      />
    </div>
  );
};

export default DirectionListPage;
