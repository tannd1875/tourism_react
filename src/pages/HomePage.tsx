import { useEffect, useState } from "react";
import SearchBox from "../features/search-box/SearchBox";
import SuggestedList from "../features/suggested-card/SuggestedList";
import { directionType, tipType } from "../types/type";
import { fetchDirectionList, fetchTipList } from "../services/api";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [directionList, setDirectionList] = useState<directionType[]>([]);
  const [tipList, setTipList] = useState<tipType[]>([]);

  useEffect(() => {
    const getData = async () => {
      setDirectionList(await fetchDirectionList());
      setTipList(await fetchTipList());
    };
    getData();
  }, []);

  return (
    <>
      <div className="lg:w-4/5 m-auto">
        <SearchBox></SearchBox>
        <div className="my-12">
          <h1 className="text-center text-3xl font-bold uppercase">
            Điểm đến lý tưởng
          </h1>
          <div className="h-2 w-16 mx-auto mt-2 border-2 bg-orange-300"></div>

          <Link
            to="/direction"
            className="block max-w-44 text-center mx-auto my-4 border-2 rounded py-4 px-8 text-xl uppercase bg-orange-300 text-white hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Xem thêm
          </Link>

          <SuggestedList
            slideList={directionList.slice(0, 4)}
            type={"direction"}
          ></SuggestedList>
        </div>
        <div className="my-12">
          <h1 className="text-center text-3xl font-bold uppercase">
            Mẹo du lịch hay
          </h1>
          <div className="h-2 w-16 mx-auto mt-2 border-2 bg-orange-300"></div>
          <Link
            to="/tip"
            className="block max-w-44 text-center mx-auto my-4 border-2 rounded py-4 px-8 text-xl uppercase bg-orange-300 text-white hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Xem thêm
          </Link>
          <SuggestedList
            slideList={tipList.slice(0, 4)}
            type={"tip"}
          ></SuggestedList>
        </div>
      </div>
    </>
  );
};

export default HomePage;
