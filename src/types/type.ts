import { QueryResetter, QueryUpdater } from "../hooks/useQuery";

export type Direction = {
  _id: string;
  title: string;
  province: string;
  detailAddress: string;
  price: number;
  classify: string;
  images: string[];
  description: string[];
  score: number;
};

export type DirectionInstance = {
  _id: string;
  title: string;
  province: string;
  detailAddress: string;
  price: number;
  classify: string;
  cover: string;
  score: number;
};

export type Tip = {
  _id: string;
  title: string;
  images: string[];
  description: string[];
};

export type TipInstance = {
  _id: string;
  title: string;
  cover: string;
};

export type SubMenu = {
  body: string;
  href: string;
};

export type Province = {
  _id: string;
  name: string;
};

export type DirectionCategory = {
  _id: string;
  name: string;
};

export type ProductCategory = {
  _id: string;
  name: string;
};

export type Brand = {
  _id: string;
  name: string;
  country: string;
};
// for slider
type DirectionSlider = {
  slideList: Direction[];
  type: "direction";
};

type TipSlider = {
  slideList: Tip[];
  type: "tip";
};
export type Slider = DirectionSlider | TipSlider;

export type Type = "direction" | "tip" | "product";

export type HeadingType = {
  count?: number;
  type?: Type;
  title?: string;
};

export type RelatedListType = {
  currInfo: string;
  title: string;
  type: string;
};

export type Data =
  | Direction
  | Tip
  | Province
  | DirectionCategory
  | Product
  | ProductCategory
  | Brand;

export type Product = {
  _id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
};

export type FilterSubmitProps = {
  isActiveFilter: boolean;
  setIsActiveFilter: (active: boolean) => void;
  setClassifyBy: (value: string[]) => void;
  setSecondaryBy: (value: string[]) => void;
  updateQuery: QueryUpdater;
  classifyBy: string[];
  secondaryBy: string[];
  resetQuery: QueryResetter;
  provinceParam?: string;
  redirectPath?: string;
  secondaryKey: string; // e.g. "province" or "brand"
  setPage: (page: number) => void;
  page: number;
};

export type FilterInputProps = {
  value: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isActiveFilter?: boolean;
  provinceParam?: string;
};

export type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
  onPageChange: (page: number) => void;
};
