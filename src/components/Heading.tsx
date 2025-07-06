import { HeadingType, Type } from "../types/type";

const Heading = ({ type, count, title }: HeadingType) => {
  const titleMap: { [key in Type]: string } = {
    direction: "Danh sách các địa điểm du lịch",
    tip: "Các mẹo du lich",
    product: "Các dụng cụ du lịch",
  };

  const countMap: { [key in Type]: string } = {
    direction: "địa điểm du lịch",
    tip: "mẹo du lich",
    product: "dụng cụ du lịch",
  };
  return (
    <div className="pt-8 pb-6 flex justify-between items-center ml-6 lg:ml-0">
      <p className="font-bold lg:text-4xl text-2xl">
        {title ? title : type && titleMap[type]}
      </p>
      <p className="mt-2">
        <b className="text-2xl mx-1">{count}</b> {type && countMap[type]}
      </p>
    </div>
  );
};

export default Heading;
