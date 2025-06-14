import Heading from "../components/Heading";
import TipList from "../layout/TipList";
import useFetchList from "../hooks/useFetchList";
import { Tip } from "../types/type";
import useQuery from "../hooks/useQuery";
import Pagination from "../features/pagination/Pagination";

const TipsPage = () => {
  const filter: Record<string, string> = {};
  filter.page = "1";
  filter.limit = "3";
  const [query, updateQuery] = useQuery(filter);
  const [tipList, total] = useFetchList({
    path: "/tip",
    query: query,
  });

  const handlePageChange = (value: number) => {
    updateQuery({ page: value });
  };

  return (
    <>
      <div className="mt-28 lg:w-4/5 mx-auto">
        <Heading count={total} type="tip" />
        <TipList tips={tipList as Tip[]} />
        <Pagination
          onPageChange={handlePageChange}
          totalPage={Math.ceil(total / 3)}
        />
      </div>
    </>
  );
};

export default TipsPage;
