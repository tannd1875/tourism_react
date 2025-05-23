import { DirectionFilterContext } from "../../store/context/filterContext";
import React, { useContext } from "react";
import FilterInput from "./FilterInput";
import { LocationList } from "../../store/config/const";
import Form from "../../components/Form";

const LocationFilterForm = () => {
  const { locationBy, setLocationBy, classifyBy, setIsActiveFilter } =
    useContext(DirectionFilterContext);

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLocationList = locationBy;
    const { value, checked } = event.target;

    // add location to locationList when checked
    if (checked) {
      newLocationList.push(value);
    }
    // remove when unchecked
    else if (newLocationList.indexOf(value) > -1 && !checked) {
      newLocationList.splice(newLocationList.indexOf(value), 1);
    }
    setLocationBy(newLocationList);
    handleIsActiveFilter();
  };

  const handleIsActiveFilter = () => {
    if (locationBy.length > 0 || classifyBy.length > 0) {
      setIsActiveFilter(true);
    } else setIsActiveFilter(false);
  };

  return (
    <div className="bg-white shadow-md rounded-md mb-4 border-2">
      <p className="border-b-2 p-4 text-xl font-bold ">Tỉnh/ Thành phố</p>
      <div className="px-4 pt-6">
        <Form name="CityFilterForm" variant="filter_form">
          {LocationList.map((location, index) => {
            return (
              <FilterInput
                value={location}
                key={index}
                onChangeFunction={handleLocationChange}
              />
            );
          })}
        </Form>
      </div>
    </div>
  );
};

export default LocationFilterForm;
