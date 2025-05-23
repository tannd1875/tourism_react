import { DirectionFilterContext } from "../../store/context/filterContext";
import { useContext } from "react";
import Button from "../../components/Button";

const FilterSubmit = () => {
  const {
    isActiveFilter,
    setIsActiveFilter,
    setIsResetFilter,
    setClassifyBy,
    setLocationBy,
    isSubmit,
    setIsSubmit,
  } = useContext(DirectionFilterContext);
  const submitButtonMap: { [index: string]: unknown } = {
    true: "bg-teal-500",
    false: "hover:cursor-not-allowed bg-gray-200",
  };

  const resetButtonMap: { [index: string]: unknown } = {
    true: "bg-red-500",
    false: "hover:cursor-not-allowed bg-gray-200",
  };
  return (
    <>
      {isSubmit && !isActiveFilter ? (
        <p className="text-red-500 text-center mb-2">
          Vui lòng chọn các bộ lọc trước khi lọc kết quả!
        </p>
      ) : null}
      <Button
        variant="form"
        value={"Filter"}
        onClick={() => {
          setIsSubmit(true);
        }}
        className={`block py-4 w-full ${submitButtonMap[isActiveFilter]} rounded-md text-white mb-2 font-bold`}
      >
        Lọc kết quả
      </Button>
      {isActiveFilter ? (
        <Button
          variant="form"
          value={"Reset"}
          onClick={() => {
            setIsSubmit(true);
            setIsResetFilter(true);
            setIsActiveFilter(false);
            setClassifyBy([]);
            setLocationBy([]);
          }}
          className={`block py-4 w-full ${resetButtonMap[isActiveFilter]} rounded-md text-white mb-2 font-bold`}
        >
          Xóa bộ lọc
        </Button>
      ) : null}
    </>
  );
};

export default FilterSubmit;
