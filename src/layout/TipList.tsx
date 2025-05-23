import Button from "../components/Button";
import { Tip } from "../types/type";

const TipList = ({ tips }: { tips: Tip[] }) => {
  return (
    <>
      {tips.map((item, index) => (
        <div
          key={index}
          className="flex justify-start items-center lg:gap-10 gap-4 lg:ml-20 mx-4"
        >
          <div className="w-1/2 lg:h-96 h-60 overflow-hidden mb-10">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <span className="lg:text-2xl text-xl font-semibold">
              {item.title}
            </span>
            <Button
              variant="tip_info"
              to={`/information?id=${item._id}&type=tip`}
            >
              Xem thêm
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TipList;
