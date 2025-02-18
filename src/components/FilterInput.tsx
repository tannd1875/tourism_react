import { DirectionFilterContext } from "../lib/context/filterContext";
import React, { useContext } from "react";

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
    <div className="mb-4">
      {isResetFilter ? (
        <input
          type="checkbox"
          name={value}
          value={value}
          checked={false}
          id=""
          className="inline mr-4 scale-[1.75] hover:cursor-pointer"
          onChange={onChangeFunction}
        />
      ) : (
        <input
          type="checkbox"
          name={value}
          value={value}
          id=""
          className="inline mr-4 scale-[1.75] hover:cursor-pointer"
          onChange={onChangeFunction}
        />
      )}
      <p className="label inline">{value}</p>
    </div>
  );
};

export default FilterInput;
