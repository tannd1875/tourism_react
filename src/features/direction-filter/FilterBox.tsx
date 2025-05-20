import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ClassifyFilterForm from "../classify-filter/ClassifyFilterForm";
import LocationFilterForm from "./LocationFilterForm";
import FilterSubmit from "../../components/FilterSubmit";

const FilterBox = () => {
  const [activeFilterResponsive, setActiveFilterResponsive] =
    useState("window");

  const filterResponsiveMap: { [index: string]: unknown } = {
    mobile: "visible",
    window: "hidden",
  };

  return (
    <>
      <button
        onClick={() => setActiveFilterResponsive("mobile")}
        className="px-4 py-2 border rounded-sm mb-4 right-0 -mt-4 ml-60 sm:hidden"
      >
        <FontAwesomeIcon icon={faFilter} className="inline-block mr-2" />
        Bộ lọc
      </button>
      <button
        className={`lg:hidden max-sm:${filterResponsiveMap[activeFilterResponsive]} w-screen h-screen z-10 inset-0 bg-gray-300 fixed`}
        onClick={() => setActiveFilterResponsive("window")}
      ></button>

      <div
        className={`lg:w-1/4 max-sm:${filterResponsiveMap[activeFilterResponsive]}
        max-sm:w-4/5 max-sm:mx-auto max-sm:absolute max-sm:z-20 max-sm:top-8 
        max-sm:left-8`}
      >
        <ClassifyFilterForm></ClassifyFilterForm>
        <LocationFilterForm></LocationFilterForm>
        <FilterSubmit></FilterSubmit>
      </div>
    </>
  );
};

export default FilterBox;
