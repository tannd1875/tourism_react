import { DirectionFilterContext } from "../../store/context/filterContext";
import React, { useContext } from "react";
import FilterInput from "./FilterInput";
import Form from "../../components/Form";
import FormWrapper from "../../layout/FormWrapper";

// const ClassifyList = (localStorage.getItem("classification") as string).split(
//   ","
// );

const ClassifyList = [
  "Danh lam thắng cảnh",
  "Khu vui chơi giải trí",
  "Di tích lịch sử",
  "Trung tâm thương mại",
];

const ClassifyFilterForm = () => {
  const { locationBy, setIsActiveFilter, classifyBy, setClassifyBy } =
    useContext(DirectionFilterContext);

  const handleClassifyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const newClassifyList = classifyBy;

    if (checked) {
      newClassifyList.push(value);
      setClassifyBy(newClassifyList);
    } else if (newClassifyList.indexOf(value) > -1 && !checked) {
      newClassifyList.splice(newClassifyList.indexOf(value), 1);
    }
    setClassifyBy(newClassifyList);
    handleIsActiveFilter();
  };

  const handleIsActiveFilter = () => {
    if (locationBy.length > 0 || classifyBy.length > 0) {
      setIsActiveFilter(true);
    } else setIsActiveFilter(false);
  };
  return (
    <FormWrapper title="Loại hình du lịch">
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
    </FormWrapper>
  );
};

export default ClassifyFilterForm;
