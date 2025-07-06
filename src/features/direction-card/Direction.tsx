import { Direction } from "../../types/type";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "../../utils/formatting";

const ColorClassify: { [index: string]: unknown } = {
  "Danh lam thắng cảnh": "bg-teal-400",
  "Di tích lịch sử": "bg-rose-400",
  "Khu vui chơi giải trí": "bg-purple-400",
  "Trung tâm thương mại": "bg-blue-400",
};

const DirectionItem = ({ item }: { item: Direction }) => {
  return (
    <a
      href={`/information/?id=${item._id}&type=direction`}
      key={item._id}
      className="flex justify-start items-baseline rounded-md mb-4 border-2 
              lg:justify-between lg:items-center
              lg:hover:cursor-pointer lg:hover:scale-105 lg:hover:translate-x-2 
              lg:hover:shadow-lg transition-all duration-200"
    >
      <div className="flex justify-between items-center">
        <div className="w-40 h-40 overflow-hidden">
          <img
            src={item.images[0]}
            alt="Direction Cover"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="lg:ml-6 ml-3">
          <p
            className={`inline rounded-3xl text-white py-1 px-4 text-sm ${
              ColorClassify[item.classify]
            }`}
          >
            {item.classify}
          </p>
          <p className="font-bold lg:text-xl text-l my-2 ml-2 max-sm:truncate max-sm:w-44">
            {item.title}
          </p>
          <p className="mb-2 max-sm:truncate max-sm:w-44">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-3.5 inline mx-2"
            />
            {item.detailAddress}
          </p>
          <div className="sm:hidden">
            {item.price ? (
              <>
                <p className="text-teal-500 font-semibold px-3">
                  {formatCurrency(item.price)}
                </p>
              </>
            ) : (
              <p className="text-teal-500 font-semibold px-3">MIỄN PHÍ</p>
            )}
          </div>
        </div>
      </div>
      <div className="p-8 max-sm:hidden">
        {item.price ? (
          <>
            <p className="text-teal-500 text-center font-semibold">
              {formatCurrency(item.price)}
            </p>
            <p className="text-center">Mỗi người</p>
          </>
        ) : (
          <p className="text-teal-500 text-center font-semibold pr-4">
            MIỄN PHÍ
          </p>
        )}
      </div>
    </a>
  );
};

export default DirectionItem;
