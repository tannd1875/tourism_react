import { useContext } from "react";
import FilterSubmit from "../features/direction-filter/FilterSubmit";
import {
  DirectionFilterContext,
  ProductFilterContext,
} from "../store/context/context";
import { FilterSubmitProps } from "../types/type";

const WithFilterContext = (submitFor: "direction" | "product") => {
  const DirectionContext = useContext(DirectionFilterContext);
  const ProductContext = useContext(ProductFilterContext);
  let filterProps: FilterSubmitProps;
  if (submitFor === "direction") {
    filterProps = {
      isActiveFilter: DirectionContext.isActiveFilter,
      setIsActiveFilter: DirectionContext.setIsActiveFilter,
      setClassifyBy: DirectionContext.setClassifyBy,
      setSecondaryBy: DirectionContext.setLocationBy,
      updateQuery: DirectionContext.updateQuery,
      classifyBy: DirectionContext.classifyBy,
      secondaryBy: DirectionContext.locationBy,
      resetQuery: DirectionContext.resetQuery,
      provinceParam: DirectionContext.provinceParam || "",
      redirectPath: "/direction",
      secondaryKey: "province",
    };
  } else if (submitFor === "product") {
    filterProps = {
      isActiveFilter: ProductContext.isActiveFilter,
      setIsActiveFilter: ProductContext.setIsActiveFilter,
      setClassifyBy: ProductContext.setClassifyBy,
      setSecondaryBy: ProductContext.setBrandBy,
      updateQuery: ProductContext.updateQuery,
      classifyBy: ProductContext.classifyBy,
      secondaryBy: ProductContext.brandBy,
      resetQuery: ProductContext.resetQuery,
      secondaryKey: "brand",
    };
  }
  return () => {
    return <FilterSubmit {...filterProps} />;
  };
};

export default WithFilterContext;
