import { useContext } from "react";
import Input from "../../components/Input";
import { DirectionFilterContext } from "../../store/context/context";
import { FilterInputProps } from "../../types/type";

const FilterInput = ({ value, onChangeFunction }: FilterInputProps) => {
  const { isActiveFilter, provinceParam } = useContext(DirectionFilterContext);
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
          defaultChecked={value == provinceParam}
          disabled={value == provinceParam}
          onChange={onChangeFunction}
          variant="filter_checkbox"
        />
      )}
      <span className="inline">{value}</span>
    </div>
  );
};

export default FilterInput;
