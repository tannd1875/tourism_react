import { ChangeEvent, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";

const dropDownList = [
  "Đồng Nai",
  "Bình Dương",
  "Thành phố Hồ Chí Minh",
  "Bà Rịa - Vũng Tàu",
];

const SearchBox = () => {
  const [addressValue, setAddressValue] = useState<string>("");
  const [directionValue, setDirectionValue] = useState<string>("");

  return (
    <div className="text-xl py-20 px-12 bg-gradient-to-r from-green-300 to-emerald-500 lg:mt-28 max-sm:pt-36 relative">
      <h1 className="mb-6 font-bold text-2xl text-center">
        Tìm một địa điểm du lịch phù hợp
      </h1>
      <div className="flex justify-between items-center gap-4 rounded flex-col lg:flex-row">
        <DropDownMenu
          List={dropDownList}
          setAddress={setAddressValue}
        ></DropDownMenu>
        <input
          required
          className="flex p-4 w-full outline-none grow-1"
          type="text"
          placeholder="Nhập địa điểm du lịch"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setDirectionValue(e.target.value);
          }}
        />
        <Link
          className="lg:w-1/6 w-full border-white border bg-green-300 p-4 font-bold hover:cursor-pointer text-center min-w-40"
          to={`/direction?direction=${directionValue}&address=${addressValue}`}
        >
          Tìm kiếm
        </Link>
      </div>
    </div>
  );
};

export default SearchBox;
