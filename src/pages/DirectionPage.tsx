import { useEffect, useState } from "react";
import FilterBox from "../components/FilterBox";
import Heading from "../components/Heading";
import DirectionList from "../components/DirectionList";
import { manageDataOnDirectionPage, getDataFiltered } from "../utils/helper";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";
import { directionType } from "../types/type";
import { fetchDirectionList } from "../lib/api";
import { DirectionHeadingContext } from "../lib/context/headingContext";
import { DirectionFilterContext } from "../lib/context/filterContext";

const DirectionListPage = () => {
  const [searchParams] = useSearchParams();
  const directionParam = searchParams.get("direction");
  const addressParam = searchParams.get("address");

  // all direction => context
  const [rawData, setRawData] = useState<Array<directionType>>([]);

  //handle page, pagination limit of page is 5
  const [page, setPage] = useState(1);
  const limit = 5;

  // sort state
  const [sortBy, setSortBy] = useState("");

  //handle direction list on page
  const [directionList, setDirectionList] = useState<Array<directionType>>([]);
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

  // every time sortByValue change => data on page change
  useEffect(() => {
    const handleSort = () => {
      const sortedList = [...directionList];
      if (sortBy === "Tên") {
        sortedList.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        });
      }

      if (sortBy === "Giá tiền") {
        sortedList.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          } else if (a.price > b.price) {
            return 1;
          } else {
            return 0;
          }
        });
      }
      setDirectionList(sortedList);
      setCount(directionList.length);
    };
    handleSort();
  }, [sortBy]);

  //handle filter
  useEffect(() => {
    const filteredList = [classifyBy, locationBy];
    const handleFilter = (filteredList: string[][]) => {
      console.log(filteredList);
      if (filteredList) {
        const filterResult = getDataFiltered(rawData, filteredList);
        setDirectionList(filterResult);
        setCount(filterResult.length);
        console.log(filterResult);
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
  }, [isSubmit, isResetFilter]);

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
            <FilterBox></FilterBox>
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
