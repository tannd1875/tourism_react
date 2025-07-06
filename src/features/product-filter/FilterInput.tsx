import { useContext } from "react";
import Input from "../../components/Input";
import { ProductFilterContext } from "../../store/context/context";
import { FilterInputProps } from "../../types/type";

const FilterInput = ({ value, onChangeFunction }: FilterInputProps) => {
  const { isActiveFilter } = useContext(ProductFilterContext);
  return (
    <div>
      {!isActiveFilter ? (
        <Input
          type="checkbox"
          name={value}
          value={value}
          checked={false}
          onChange={onChangeFunction}
          variant="filter_checkbox"
        />
      ) : (
        <Input
          type="checkbox"
          name={value}
          value={value}
          onChange={onChangeFunction}
          variant="filter_checkbox"
        />
      )}
      <span className="inline">{value}</span>
    </div>
  );
};

export default FilterInput;
