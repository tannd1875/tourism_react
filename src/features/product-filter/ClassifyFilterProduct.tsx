import React, { useContext } from "react";
import FilterInput from "../product-filter/FilterInput";
import Form from "../../components/Form";
import FormWrapper from "../../layout/FormWrapper";
import useFetchList from "../../hooks/useFetchList";
import { ProductFilterContext } from "../../store/context/context";
import { ProductCategory } from "../../types/type";

const ClassifyFilterProduct = () => {
  const { brandBy, setIsActiveFilter, classifyBy, setClassifyBy } =
    useContext(ProductFilterContext);

  const [classifyList] = useFetchList({
    path: "/product-category",
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
    if (brandBy.length > 0 || classifyBy.length > 0) {
      setIsActiveFilter(true);
    } else setIsActiveFilter(false);
  };
  return (
    <FormWrapper title="Phân loại sản phẩm">
      <Form name="ClassifyFilterForm" action="" variant="filter">
        {(classifyList as ProductCategory[]).map((category) => {
          return (
            <FilterInput
              value={category.name}
              key={category._id}
              onChangeFunction={(e) => {
                handleClassifyChange(e);
              }}
            />
          );
        })}
      </Form>
    </FormWrapper>
  );
};

export default ClassifyFilterProduct;
