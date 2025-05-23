import { Direction, Tip } from "../types/type";

export const manageDataOnTipPage = (
  data: Array<Tip>,
  page: number,
  limit: number
): Array<Tip> => {
  const array = [];
  for (let index = (page - 1) * limit; index < page * limit; index++)
    if (index < data.length) array.push(data[index]);
  return array;
};

export const manageDataOnDirectionPage = (
  data: Array<Direction>,
  page: number,
  limit: number
): Array<Direction> => {
  const array = [];
  for (let index = (page - 1) * limit; index < page * limit; index++)
    if (index < data.length) array.push(data[index]);
  return array;
};

const getDataFilteredByClassify = (
  data: Array<Direction>,
  classifyList: Array<string>
): Array<Direction> => {
  return data.filter((direction) => {
    return classifyList.includes(direction.classify);
  });
};

const getDataFilteredByLocation = (
  data: Array<Direction>,
  locationList: Array<string>
): Array<Direction> => {
  return data.filter((direction) => {
    return locationList.includes(direction.address);
  });
};

export const getDataFiltered = (
  data: Array<Direction>,
  filterList: string[][]
): Array<Direction> => {
  const filterByClassify = getDataFilteredByClassify(data, filterList[0]);
  const filterByLocation = getDataFilteredByLocation(data, filterList[1]);
  if (filterList[1].length == 0) return filterByClassify;
  if (filterList[0].length == 0) return filterByLocation;
  return filterByClassify.filter((direction) =>
    filterByLocation.includes(direction)
  );
};
