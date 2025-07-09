import { ChangeEvent, useEffect, useMemo, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import Button from "../../components/Button";
import Input from "../../components/Input";

const SearchBox = () => {
  const [provinceValue, setProvinceValue] = useState<string>("");
  const [directionValue, setDirectionValue] = useState<string>("");
  const [searchString, setSearchString] = useState("");

  const searchBy = useMemo(() => {
    const result: Record<string, string> = {};
    if (provinceValue) result.province = provinceValue;
    if (directionValue) result.direction = directionValue;
    return result;
  }, [provinceValue, directionValue]);

  useEffect(() => {
    setSearchString(new URLSearchParams(searchBy).toString());
  }, [searchBy]);

  return (
    <div className="text-xl py-20 px-12 bg-gradient-to-r from-green-300 to-emerald-500 lg:mt-28 max-sm:pt-36 relative">
      <h1 className="mb-6 font-bold text-2xl text-center">
        Tìm một địa điểm du lịch phù hợp
      </h1>
      <div className="flex justify-between items-center gap-4 rounded flex-col lg:flex-row">
        <DropDownMenu setAddress={setProvinceValue} />
        <Input
          variant="search_input"
          type="text"
          placeholder="Nhập địa điểm du lịch"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setDirectionValue(e.target.value);
          }}
        />
        <Button variant="search" to={`/direction?${searchString}`}>
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
