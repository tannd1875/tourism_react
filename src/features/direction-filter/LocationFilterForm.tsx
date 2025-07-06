import React, { useContext } from "react";
import FilterInput from "./FilterInput";
import Form from "../../components/Form";
import FormWrapper from "../../layout/FormWrapper";
import useFetchList from "../../hooks/useFetchList";
import { DirectionFilterContext } from "../../store/context/context";
import { Province } from "../../types/type";

const LocationFilterForm = () => {
  const { locationBy, setLocationBy, classifyBy, setIsActiveFilter } =
    useContext(DirectionFilterContext);

  const [locationList] = useFetchList({
    path: "/province",
    query: {},
  });

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
      <Form name="CityFilterForm" variant="filter">
        {(locationList as Province[]).map((province) => {
          return (
            <FilterInput
              value={province.name}
              key={province._id}
              onChangeFunction={handleLocationChange}
            />
          );
        })}
      </Form>
    </FormWrapper>
  );
};

export default LocationFilterForm;
