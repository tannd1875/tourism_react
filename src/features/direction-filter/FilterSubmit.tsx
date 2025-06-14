import { DirectionFilterContext } from "../../store/context/filterContext";
import { useContext } from "react";
import Button from "../../components/Button";

const FilterSubmit = () => {
  const {
    isActiveFilter,
    setIsActiveFilter,
    setClassifyBy,
    setLocationBy,
    updateQuery,
    classifyBy,
    locationBy,
    resetQuery,
    addressParam,
  } = useContext(DirectionFilterContext);
  const submitButtonMap: { [index: string]: unknown } = {
    true: "bg-teal-500",
    false: "hover:cursor-not-allowed bg-gray-200 hover:scale-none",
  };

  const resetButtonMap: { [index: string]: unknown } = {
    true: "bg-red-500",
    false: "bg-gray-200 hover:cursor-not-allowed",
  };
  return (
    <>
      <Button
        variant="form"
        value={"Filter"}
        onClick={() => {
          updateQuery({
            classifyBy: classifyBy.join(","),
            address: locationBy.join(","),
          });
        }}
        className={submitButtonMap[isActiveFilter.toString()] as string}
      >
        Lọc kết quả
      </Button>
      {isActiveFilter ? (
        <Button
          variant="form"
          value={"Reset"}
          onClick={() => {
            setIsActiveFilter(false);
            setClassifyBy([]);
            setLocationBy([]);
            if (addressParam) {
              updateQuery({ page: 1, limit: 3 });
              window.location.href = "/direction";
            } else {
              resetQuery();
            }
          }}
          className={resetButtonMap[isActiveFilter.toString()] as string}
        >
          Xóa bộ lọc
        </Button>
      ) : null}
    </>
  );
};

export default FilterSubmit;
