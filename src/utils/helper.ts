import { directionType, tipType } from "../types/type";

export const manageDataOnTipPage = (
  data: Array<tipType>,
  page: number,
  limit: number
): Array<tipType> => {
  const array = [];
  for (let index = (page - 1) * limit; index < page * limit; index++)
    if (index < data.length) array.push(data[index]);
  return array;
};

export const manageDataOnDirectionPage = (
  data: Array<directionType>,
  page: number,
  limit: number
): Array<directionType> => {
  const array = [];
  for (let index = (page - 1) * limit; index < page * limit; index++)
    if (index < data.length) array.push(data[index]);
  return array;
};

const getDataFilteredByClassify = (
  data: Array<directionType>,
  classifyList: Array<string>
): Array<directionType> => {
  return data.filter((direction) => {
    return classifyList.includes(direction.classify);
  });
};

const getDataFilteredByLocation = (
  data: Array<directionType>,
  locationList: Array<string>
): Array<directionType> => {
  return data.filter((direction) => {
    return locationList.includes(direction.address);
  });
};

export const getDataFiltered = (
  data: Array<directionType>,
  filterList: string[][]
): Array<directionType> => {
  const filterByClassify = getDataFilteredByClassify(data, filterList[0]);
  const filterByLocation = getDataFilteredByLocation(data, filterList[1]);
  console.log(filterList[0], filterList[1]);
  console.log(filterByClassify, filterByLocation);
  if (filterList[1].length == 0) return filterByClassify;
  if (filterList[0].length == 0) return filterByLocation;
  return filterByClassify.filter((direction) =>
    filterByLocation.includes(direction)
  );
};
