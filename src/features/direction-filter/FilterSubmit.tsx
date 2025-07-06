import Button from "../../components/Button";
import { FilterSubmitProps } from "../../types/type";

const FilterSubmit = ({
  isActiveFilter,
  setIsActiveFilter,
  setClassifyBy,
  setSecondaryBy,
  updateQuery,
  classifyBy,
  secondaryBy,
  resetQuery,
  provinceParam,
  redirectPath,
  secondaryKey,
}: FilterSubmitProps) => {
  const submitButtonMap: Record<string, string> = {
    true: "bg-teal-500",
    false: "hover:cursor-not-allowed bg-gray-200 hover:scale-none",
  };

  const resetButtonMap: Record<string, string> = {
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
            [secondaryKey]: secondaryBy.join(","),
          });
        }}
        className={submitButtonMap[isActiveFilter.toString()]}
      >
        Lọc kết quả
      </Button>
      {isActiveFilter && (
        <Button
          variant="form"
          value={"Reset"}
          onClick={() => {
            setIsActiveFilter(false);
            setClassifyBy([]);
            setSecondaryBy([]);
            resetQuery();
            if (provinceParam && redirectPath) {
              updateQuery({ page: 1, limit: 3 });
              window.location.href = redirectPath;
            }
          }}
          className={resetButtonMap[isActiveFilter.toString()]}
        >
          Xóa bộ lọc
        </Button>
      )}
    </>
  );
};

export default FilterSubmit;
