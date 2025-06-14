import { Tip, Direction } from "./type";

export type API = {
  path: string;
  query?: object;
  config?: object;
};

export type Data = Direction[] | Tip[] | string[];

export type Item = Direction | Tip;
