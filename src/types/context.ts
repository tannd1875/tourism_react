import { QueryResetter, QueryUpdater } from "../hooks/useQuery";

export type DirectionFilterContextType = {
  classifyBy: Array<string>;
  setClassifyBy: (classifyList: Array<string>) => void;
  locationBy: Array<string>;
  setLocationBy: (locationList: Array<string>) => void;
  isActiveFilter: boolean;
  setIsActiveFilter: (status: boolean) => void;
  query: object;
  updateQuery: (newQuery: object) => void;
  resetQuery: () => void;
  provinceParam: string | null;
  page: number;
  setPage: (page: number) => void;
};

export type ProductFilterContextType = {
  classifyBy: Array<string>;
  setClassifyBy: (classifyList: Array<string>) => void;
  brandBy: Array<string>;
  setBrandBy: (brandList: Array<string>) => void;
  isActiveFilter: boolean;
  setIsActiveFilter: (status: boolean) => void;
  page: number;
  setPage: (page: number) => void;
  query: object;
  updateQuery: QueryUpdater;
  resetQuery: QueryResetter;
};

export type ProductFilterKey = keyof ProductFilterContextType;

export type ProductInfo = { id: string; quantity: number };

export type CartChangeContextType = {
  isChangeValue: boolean;
  setIsChangeValue: (value: boolean) => void;
  productChanged: Array<ProductInfo>;
  setProductChanged: React.Dispatch<React.SetStateAction<ProductInfo[]>>;
};
