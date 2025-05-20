import { tipType } from "../types/type";

type Prop = {
  items: tipType[];
};

const TipsList = ({ items }: Prop) => {
  return (
    <>
      {items.map((item, index) => (
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
            <p className="lg:text-2xl text-xl font-semibold">{item.title}</p>
            <a
              className="block w-1/3 text-center max-sm:w-36 lg:text-2xl text-xl lg:bg-gray-500 text-white lg:p-6 p-4 mt-4 rounded-md lg:hover:bg-amber-500 bg-amber-500"
              href={`/information?id=${item._id}&type=tip`}
            >
              Xem thêm
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default TipsList;
