import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import TipList from "../layout/TipList";
import Pagination from "../features/pagination/Pagination";
import { manageDataOnTipPage } from "../utils/helper";
import { Tip } from "../types/type";
import { fetchTipList } from "../services/api";

const TipsPage = () => {
  //handle full data
  const [rawData, setRawData] = useState<Array<Tip>>([]);
  //handle data base on pagination
  const [tipLists, setTipLists] = useState<Array<Tip>>([]);

  // 5 tips per page
  const limit = 5;
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getTipData = async () => {
      const data = await fetchTipList();
      setRawData(data);
      setTipLists(manageDataOnTipPage(data, 1, limit));
    };
    getTipData();
  }, [rawData, page]);

  const handlePageChange = (value: number) => {
    const dataOnPage = manageDataOnTipPage(rawData, value, limit);
    setPage(value);
    setTipLists(dataOnPage);
  };
  return (
    <>
      <div className="mt-28 lg:w-4/5 mx-auto">
        <Heading count={rawData.length} />
        <TipList tips={tipLists} />
        <Pagination
          onPageChange={handlePageChange}
          currentPage={page}
          end={page * limit > rawData.length ? rawData.length : page * limit}
          length={rawData.length}
          numberOfPage={Math.ceil(rawData.length / limit)}
          type={"mẹo du lịch"}
        ></Pagination>
      </div>
    </>
  );
};

export default TipsPage;
