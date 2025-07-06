import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../components/Button";
import WithFilterContext from "../hoc/withFilterContext";

const FilterBox = ({
  children,
  submitFor,
}: {
  children: React.ReactNode;
  submitFor: "product" | "direction";
}) => {
  const [activeFilterResponsive, setActiveFilterResponsive] =
    useState("window");

  const filterResponsiveMap: { [index: string]: unknown } = {
    mobile: "visible",
    window: "hidden",
  };

  const SubmitButton = WithFilterContext(submitFor);
  return (
    <>
      <Button
        onClick={() => setActiveFilterResponsive("mobile")}
        variant="filter_mobile"
      >
        <FontAwesomeIcon icon={faFilter} className="inline-block mr-2" />
        Bộ lọc
      </Button>
      <button
        className={`lg:hidden max-sm:${filterResponsiveMap[activeFilterResponsive]} w-screen h-full z-10 bg-gray-300 fixed inset-0`}
        onClick={() => setActiveFilterResponsive("window")}
      />

      <div
        className={`lg:w-1/4 max-sm:${filterResponsiveMap[activeFilterResponsive]}
        max-sm:w-4/5 max-sm:mx-auto max-sm:absolute max-sm:z-20 max-sm:top-8 
        max-sm:left-8`}
      >
        {children}
        <SubmitButton />
      </div>
    </>
  );
};

export default FilterBox;
