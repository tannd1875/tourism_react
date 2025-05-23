import { useEffect, useState } from "react";
import FilterBox from "../features/direction-filter/FilterBox";
import Heading from "../components/Heading";
import DirectionList from "../layout/DirectionList";
import { manageDataOnDirectionPage, getDataFiltered } from "../utils/helper";
import Pagination from "../features/pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { Direction } from "../types/type";
import { fetchDirectionList } from "../services/api";
import { DirectionHeadingContext } from "../store/context/headingContext";
import { DirectionFilterContext } from "../store/context/filterContext";

const DirectionListPage = () => {
  const [searchParams] = useSearchParams();
  const directionParam = searchParams.get("direction");
  const addressParam = searchParams.get("address");

  // all direction => context
  const [rawData, setRawData] = useState<Array<Direction>>([]);

  //handle page, pagination limit of page is 5
  const [page, setPage] = useState(1);
  const limit = 5;

  // sort state
  const [sortBy, setSortBy] = useState("");

  //handle direction list on page
  const [directionList, setDirectionList] = useState<Array<Direction>>([]);
  const [count, setCount] = useState(0);

  //handle filter
  const [classifyBy, setClassifyBy] = useState<Array<string>>([]);
  const [locationBy, setLocationBy] = useState<Array<string>>([]);
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [isResetFilter, setIsResetFilter] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  // fetching data base on params
  useEffect(() => {
    let URL = "";
    if (addressParam != null && directionParam != null) {
      URL = `http://localhost:5001/direction/address_title/?address=${addressParam}&title=${directionParam}`;
    } else if (addressParam == null && directionParam != null) {
      URL = `http://localhost:5001/direction/title/?title=${directionParam}`;
    } else URL = `http://localhost:5001/direction`;

    const getData = async () => {
      const data = await fetchDirectionList(URL);
      setRawData(data);
      setDirectionList(manageDataOnDirectionPage(data, 1, limit));
      setCount(data.length);
    };
    getData();
  }, [addressParam, directionParam]);

  //handle filter
  useEffect(() => {
    const filteredList = [classifyBy, locationBy];
    const handleFilter = (filteredList: string[][]) => {
      if (filteredList) {
        const filterResult = getDataFiltered(rawData, filteredList);
        setDirectionList(filterResult);
        setCount(filterResult.length);
        setIsSubmit(false);
      } else {
        setDirectionList(manageDataOnDirectionPage(rawData, 1, limit));
        setCount(rawData.length);
      }
    };
    if (isSubmit) {
      handleFilter(filteredList);
    }
    if (isResetFilter) {
      setDirectionList(manageDataOnDirectionPage(rawData, 1, limit));
      setCount(rawData.length);
      window.location.reload();
    }
  }, [isSubmit, isResetFilter, classifyBy, locationBy, rawData]);

  const handlePageChange = (value: number) => {
    const newData = manageDataOnDirectionPage(rawData, value, limit);
    setPage(value);
    setDirectionList(newData);
  };

  return (
    <>
      <div className="mt-28 lg:w-4/5 mx-auto w-full">
        <DirectionHeadingContext.Provider
          value={{ count, setCount, sortBy, setSortBy }}
        >
          <Heading type="direction" count={rawData.length}></Heading>
        </DirectionHeadingContext.Provider>

        <div className="lg:flex lg:justify-between lg:items-start lg:flex-1">
          <DirectionFilterContext.Provider
            value={{
              classifyBy,
              setClassifyBy,
              locationBy,
              setLocationBy,
              isActiveFilter,
              setIsActiveFilter,
              isResetFilter,
              setIsResetFilter,
              isSubmit,
              setIsSubmit,
            }}
          >
            <FilterBox />
          </DirectionFilterContext.Provider>
          <DirectionList items={directionList}></DirectionList>
        </div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={page}
          end={page * limit > count ? count : page * limit}
          length={count}
          numberOfPage={Math.ceil(count / limit)}
          type={"địa điểm"}
        ></Pagination>
      </div>
    </>
  );
};

export default DirectionListPage;
