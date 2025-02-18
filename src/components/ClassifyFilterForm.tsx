import { DirectionFilterContext } from "../lib/context/filterContext";
import React, { useContext } from "react";
import FilterInput from "./FilterInput";

const ClassifyFilterForm = () => {
  const { classifyBy, setClassifyBy, locationBy, setIsActiveFilter } =
    useContext(DirectionFilterContext);
  const ClassifyList = [
    "Danh lam thắng cảnh",
    "Di tích lịch sử",
    "Khu vui chơi giải trí",
    "Trung tâm thương mại",
  ];
  const handleClassifyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const newClassifyList = classifyBy;

    // add new classification when checked
    if (checked) {
      newClassifyList.push(value);
    }
    // remove if unchecked
    else if (newClassifyList.indexOf(value) > -1 && !checked) {
      newClassifyList.splice(newClassifyList.indexOf(value), 1);
    }
    setClassifyBy(newClassifyList);
    console.log(newClassifyList);
    handleIsActiveFilter();
  };

  const handleIsActiveFilter = () => {
    if (locationBy.length > 0 || classifyBy.length > 0) {
      setIsActiveFilter(true);
    } else {
      setIsActiveFilter(false);
    }
  };
  return (
    <div className="bg-white shadow-md rounded-md mb-4 border-2">
      <p className="border-b-2 p-4 text-xl font-bold ">Loại hình du lịch</p>
      <div className="px-4 pt-6">
        <form
          name="ClassifyFilterForm"
          action=""
          className="flex flex-col justify-between items-left mb-4 ml-6"
        >
          {ClassifyList.map((classify, index) => {
            return (
              <FilterInput
                value={classify}
                key={index}
                onChangeFunction={handleClassifyChange}
              ></FilterInput>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default ClassifyFilterForm;
