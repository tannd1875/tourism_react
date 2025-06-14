import { DirectionFilterContext } from "../../store/context/filterContext";
import React, { useContext } from "react";
import FilterInput from "./FilterInput";
import Form from "../../components/Form";
import FormWrapper from "../../layout/FormWrapper";

const LocationList = (localStorage.getItem("provinces") as string).split(",");

const LocationFilterForm = () => {
  const { locationBy, setLocationBy, classifyBy, setIsActiveFilter } =
    useContext(DirectionFilterContext);

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLocationList = locationBy;
    const { value, checked } = event.target;

    if (checked) {
      newLocationList.push(value);
    } else if (newLocationList.indexOf(value) > -1 && !checked) {
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
    <FormWrapper title="Tỉnh/ Thành phố">
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
    </FormWrapper>
  );
};

export default LocationFilterForm;
