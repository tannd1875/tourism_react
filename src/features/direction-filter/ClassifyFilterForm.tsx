import React, { useContext } from "react";
import Form from "../../components/Form";
import FormWrapper from "../../layout/FormWrapper";
import useFetchList from "../../hooks/useFetchList";
import { DirectionFilterContext } from "../../store/context/context";
import { DirectionCategory } from "../../types/type";
import FilterInput from "./FilterInput";

const ClassifyFilterForm = () => {
  const { locationBy, setIsActiveFilter, classifyBy, setClassifyBy } =
    useContext(DirectionFilterContext);

  const [classifyList] = useFetchList({
    path: "/direction-category",
    query: {},
  });

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
      <Form name="ClassifyFilterForm" action="" variant="filter">
        {(classifyList as DirectionCategory[]).map((classify) => {
          return (
            <FilterInput
              value={classify.name}
              key={classify._id}
              onChangeFunction={handleClassifyChange}
            />
          );
        })}
      </Form>
    </FormWrapper>
  );
};

export default ClassifyFilterForm;
