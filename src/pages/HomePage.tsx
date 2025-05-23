import { useEffect, useState } from "react";
import SearchBox from "../features/search-box/SearchBox";
import SuggestedList from "../layout/SuggestedList";
import { Direction, Tip } from "../types/type";
import { fetchDirectionList, fetchTipList } from "../services/api";
import Button from "../components/Button";

const HomePage = () => {
  const [directionList, setDirectionList] = useState<Direction[]>([]);
  const [tipList, setTipList] = useState<Tip[]>([]);

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
          <div className="h-2 w-16 mx-auto mt-2 border-2 bg-orange-300" />

          <Button variant="info" to="/direction">
            Xem thêm
          </Button>

          <SuggestedList
            slideList={directionList.slice(0, 4)}
            type={"direction"}
          />
        </div>
        <div className="my-12">
          <h1 className="text-center text-3xl font-bold uppercase">
            Mẹo du lịch hay
          </h1>
          <div className="h-2 w-16 mx-auto mt-2 border-2 bg-orange-300" />

          <Button variant="info" to="/tip">
            Xem thêm
          </Button>

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
