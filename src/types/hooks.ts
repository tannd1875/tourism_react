import {
  Tip,
  Direction,
  Product,
  Province,
  DirectionCategory,
  ProductCategory,
  Brand,
} from "./type";

export type API = {
  path: string;
  query?: object;
  config?: object;
};

export type CartProduct = {
  _id: string;
  name: string;
  price: number;
  images: string[];
};

export type CartItem = {
  _id: string;
  product: CartProduct;
  quantity: number;
  images: string[];
};

export type Cart = {
  _id: string;
  user: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Data =
  | Direction[]
  | Tip[]
  | string[]
  | Product[]
  | Province[]
  | DirectionCategory[]
  | ProductCategory[]
  | Brand[]
  | Cart[];

export type Item =
  | Direction
  | Tip
  | Product
  | Province
  | DirectionCategory
  | ProductCategory
  | Brand
  | Cart;
