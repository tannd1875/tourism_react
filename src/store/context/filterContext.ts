import { createContext, useContext } from "react";

export type FilterContext = {
  classifyBy: Array<string>;
  setClassifyBy: (classifyList: Array<string>) => void;
  locationBy: Array<string>;
  setLocationBy: (locationList: Array<string>) => void;
  isActiveFilter: boolean;
  setIsActiveFilter: (status: boolean) => void;
  query: object;
  updateQuery: (newQuery: object) => void;
  resetQuery: () => void;
  addressParam: string | null;
};

export const DirectionFilterContext = createContext<FilterContext>({
  classifyBy: [],
  setClassifyBy: () => {},
  locationBy: [],
  setLocationBy: () => {},
  isActiveFilter: false,
  setIsActiveFilter: () => {},
  query: {},
  updateQuery: () => {},
  resetQuery: () => {},
  addressParam: "",
});

export const useGlobalFilterContext = () => useContext(DirectionFilterContext);
