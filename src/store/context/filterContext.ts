import { createContext, useContext } from "react";

export type FilterContext = {
  classifyBy: Array<string>;
  setClassifyBy: (classifyList: Array<string>) => void;
  locationBy: Array<string>;
  setLocationBy: (locationList: Array<string>) => void;
  isActiveFilter: boolean;
  setIsActiveFilter: (status: boolean) => void;
  isResetFilter: boolean;
  setIsResetFilter: (status: boolean) => void;
  isSubmit: boolean;
  setIsSubmit: (status: boolean) => void;
};

export const DirectionFilterContext = createContext<FilterContext>({
  classifyBy: [],
  setClassifyBy: () => {},
  locationBy: [],
  setLocationBy: () => {},
  isActiveFilter: false,
  setIsActiveFilter: () => {},
  isResetFilter: false,
  setIsResetFilter: () => {},
  isSubmit: false,
  setIsSubmit: () => {},
});

export const useGlobalFilterContext = () => useContext(DirectionFilterContext);
