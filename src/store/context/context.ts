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
  }
);

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
  user: null,
  setUser: () => {},
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
