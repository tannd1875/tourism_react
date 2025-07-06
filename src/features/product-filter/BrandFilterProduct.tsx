import React, { useContext } from "react";
import { ProductFilterContext } from "../../store/context/context";
import useFetchList from "../../hooks/useFetchList";
import FormWrapper from "../../layout/FormWrapper";
import Form from "../../components/Form";
import FilterInput from "../product-filter/FilterInput";
import { Brand } from "../../types/type";

const BrandFilterProduct = () => {
  const { brandBy, setIsActiveFilter, classifyBy, setBrandBy } =
    useContext(ProductFilterContext);

  const [brandList] = useFetchList({
    path: "/brand",
    query: {},
  });

  const handleClassifyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const newBrandList = brandBy;

    if (checked) {
      newBrandList.push(value);
      setBrandBy(newBrandList);
    } else if (newBrandList.indexOf(value) > -1 && !checked) {
      newBrandList.splice(newBrandList.indexOf(value), 1);
    }
    setBrandBy(newBrandList);
    handleIsActiveFilter();
  };

  const handleIsActiveFilter = () => {
    if (brandBy.length > 0 || classifyBy.length > 0) {
      setIsActiveFilter(true);
    } else setIsActiveFilter(false);
  };
  return (
    <FormWrapper title="Thương hiệu sản phẩm">
      <Form name="ClassifyFilterForm" action="" variant="filter">
        {(brandList as Brand[]).map((brand) => {
          return (
            <FilterInput
              value={brand.name}
              key={brand._id}
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

export default BrandFilterProduct;
