import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import TipsList from "../components/TipList";
import Pagination from "../components/Pagination";
import { manageDataOnTipPage } from "../utils/helper";
import { tipType } from "../types/type";
import { fetchTipList } from "../lib/api";

const TipsPage = () => {
  //handle full data
  const [rawData, setRawData] = useState<Array<tipType>>([]);
  //handle data base on pagination
  const [tipLists, setTipLists] = useState<Array<tipType>>([]);

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
        <Heading count={rawData.length}></Heading>
        <TipsList items={tipLists}></TipsList>
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
