import { useContext } from "react";
import FilterInput from "../features/direction-filter/FilterInput";
import { FilterInputProps } from "../types/type";
import {
  DirectionFilterContext,
  ProductFilterContext,
} from "../store/context/context";

const WithInputContext = ({
  inputFor,
  value,
  onChangeFunction,
}: {
  inputFor: "province" | string;
  value: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const DirectionContext = useContext(DirectionFilterContext);
  const ProductContext = useContext(ProductFilterContext);
  const inputProps: FilterInputProps =
    inputFor === "province"
      ? {
          value: value ?? "",
          onChangeFunction: onChangeFunction,
          isActiveFilter: DirectionContext.isActiveFilter ?? false,
          provinceParam: DirectionContext.provinceParam ?? "",
        }
      : {
          value: value ?? "",
          onChangeFunction: onChangeFunction,
          isActiveFilter: ProductContext.isActiveFilter ?? false,
        };

  return <FilterInput {...inputProps} />;
};

export default WithInputContext;
