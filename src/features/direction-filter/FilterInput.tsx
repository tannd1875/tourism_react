import { DirectionFilterContext } from "../../store/context/filterContext";
import React, { useContext } from "react";
import Input from "../../components/Input";

type FilterInputProps = {
  value: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterInput = ({ value, onChangeFunction }: FilterInputProps) => {
  const { isResetFilter, setIsResetFilter } = useContext(
    DirectionFilterContext
  );
  if (isResetFilter) {
    setIsResetFilter(false);
  }

  return (
    <div>
      {isResetFilter ? (
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
      <span className="label inline">{value}</span>
    </div>
  );
};

export default FilterInput;
