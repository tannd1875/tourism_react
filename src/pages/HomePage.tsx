import SearchBox from "../features/search-box/SearchBox";
import SuggestedList from "../layout/SuggestedList";
import Button from "../components/Button";
import useFetchList from "../hooks/useFetchList";
import { Direction, Tip } from "../types/type";

const HomePage = () => {
  const [recommendDirection] = useFetchList({
    path: "direction/recommend",
    query: {
      number: 4,
    },
  });

  const [recommendTip] = useFetchList({
    path: "tip/recommend",
    query: {
      number: 4,
    },
  });

  if (!localStorage.getItem("provinces")) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [provinces] = useFetchList({
      path: "direction/province",
    });
    localStorage.setItem("provinces", provinces.toString());
  }

  if (!localStorage.getItem("classify")) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [classification] = useFetchList({ path: "direction/classification" });
    localStorage.setItem("classification", classification.toString());
  }

  return (
    <>
      <div className="lg:w-4/5 m-auto">
        <SearchBox />
        <div className="my-12">
          <h1 className="text-center text-3xl font-bold uppercase">
            Điểm đến lý tưởng
          </h1>
          <div className="h-2 w-16 mx-auto mt-2 border-2 bg-orange-300" />

          <Button variant="info" to="/direction">
            Xem thêm
          </Button>

          <SuggestedList
            slideList={recommendDirection as Direction[]}
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

          <SuggestedList slideList={recommendTip as Tip[]} type={"tip"} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
