import { DirectionFilterContext } from "../../store/context/filterContext";
import React, { useContext } from "react";
import FilterInput from "./FilterInput";
import { ClassifyList } from "../../store/config/const";
import Form from "../../components/Form";

const ClassifyFilterForm = () => {
  const { classifyBy, setClassifyBy, locationBy, setIsActiveFilter } =
    useContext(DirectionFilterContext);

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
        <Form
          name="ClassifyFilterForm"
          action=""
          className="flex flex-col justify-between items-left mb-4 ml-6 gap-4"
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
        </Form>
      </div>
    </div>
  );
};

export default ClassifyFilterForm;
