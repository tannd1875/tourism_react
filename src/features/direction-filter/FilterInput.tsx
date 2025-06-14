import { DirectionFilterContext } from "../../store/context/filterContext";
import React, { useContext } from "react";
import Input from "../../components/Input";

const FilterInput = ({
  value,
  onChangeFunction,
}: {
  value: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { isActiveFilter, addressParam } = useContext(DirectionFilterContext);

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
          defaultChecked={value == addressParam}
          onChange={onChangeFunction}
          variant="filter_checkbox"
        />
      )}
      <span className="label inline">{value}</span>
    </div>
  );
};

export default FilterInput;
