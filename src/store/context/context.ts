import { CartChangeContextType } from "./../../types/context";
import { createContext } from "react";
import {
  AuthContextType,
  DirectionFilterContextType,
  ProductFilterContextType,
  ProfileContextType,
} from "../../types/context";

export const DirectionFilterContext = createContext<DirectionFilterContextType>(
  {
    classifyBy: [],
    setClassifyBy: () => {},
    locationBy: [],
    setLocationBy: () => {},
    isActiveFilter: false,
    setIsActiveFilter: () => {},
    query: {},
    updateQuery: () => {},
    resetQuery: () => {},
    provinceParam: "",
    page: 1,
    setPage: () => {},
  }
);

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
  user: null,
  setUser: () => {},
  accessToken: "",
  setAccessToken: () => {},
});

export const ProfileContext = createContext<ProfileContextType>({
  username: "",
  setUsername: () => {},
  email: "",
  setEmail: () => {},
  avatar: "",
  setAvatar: () => {},
});

export const ProductFilterContext = createContext<ProductFilterContextType>({
  classifyBy: [],
  setClassifyBy: () => {},
  brandBy: [],
  setBrandBy: () => {},
  isActiveFilter: false,
  setIsActiveFilter: () => {},
  page: 1,
  setPage: () => {},
  query: {},
  updateQuery: () => {},
  resetQuery: () => {},
});

export const CartChangeContext = createContext<CartChangeContextType>({
  isChangeValue: false,
  setIsChangeValue: () => {},
  productChanged: [],
  setProductChanged: () => {},
});
