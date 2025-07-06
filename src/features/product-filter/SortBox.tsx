import { useContext, useState } from "react";
import Button from "../../components/Button";
import { ProductFilterContext } from "../../store/context/context";

const SortBox = () => {
  const { updateQuery, resetQuery } = useContext(ProductFilterContext);
  const [activeSort, setActiveSort] = useState<"asc" | "desc" | null>(null);
  return (
    <div className="border flex items-center max-sm:flex-wrap justify-between bg-slate-200 py-2 px-4 w-full">
      <div className="flex items-center gap-2">
        <span className="py-2 px-4 text-gray-500 font-semibold">
          Sắp xếp theo:
        </span>
        <Button
          variant="sort"
          className={
            activeSort === "asc" ? "scale-110 font-bold border-black" : ""
          }
          onClick={() => {
            updateQuery({ price: "asc" });
            setActiveSort("asc");
          }}
        >
          Giá tăng dần
        </Button>
        <Button
          variant="sort"
          className={
            activeSort === "desc" ? "scale-110 font-bold border-black" : ""
          }
          onClick={() => {
            updateQuery({ price: "desc" });
            setActiveSort("desc");
          }}
        >
          Giá giảm dần
        </Button>
      </div>

      <Button
        variant="sort"
        onClick={() => {
          resetQuery();
          setActiveSort(null);
        }}
      >
        Xóa
      </Button>
    </div>
  );
};

export default SortBox;
