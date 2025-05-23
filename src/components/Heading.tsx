import { HeadingType } from "../types/type";

const Heading = ({ type, count, title }: HeadingType) => {
  return (
    <div className="pt-8 pb-6 flex justify-between items-center ml-6 lg:ml-0">
      <p className="font-bold lg:text-4xl text-2xl">
        {type == "direction"
          ? "Danh sách các địa điểm du lịch"
          : type == "tip"
          ? "Các mẹo du lịch"
          : title}
      </p>
      <p className="mt-2">
        <b className="text-2xl mx-1">{count}</b>{" "}
        {title
          ? ""
          : type == "direction"
          ? " địa điểm du lịch"
          : " mẹo du lịch"}
      </p>
    </div>
  );
};

export default Heading;
