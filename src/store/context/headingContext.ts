import { createContext, useContext } from "react";

export type HeadingContext = {
  count: number;
  setCount: (count: number) => void;
  sortBy: string;
  setSortBy: (sortByValue: string) => void;
};

export const DirectionHeadingContext = createContext<HeadingContext>({
  count: 0,
  setCount: () => {},
  sortBy: "",
  setSortBy: () => {},
});

export const useGlobalHeadingContext = () =>
  useContext(DirectionHeadingContext);
