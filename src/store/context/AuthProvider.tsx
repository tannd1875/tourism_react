import { useState, ReactNode, useEffect } from "react";
import { User } from "../../types/user";
import { AuthContext } from "./context";
import useLocalStorage from "../../hooks/useLocalStorage";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [auth] = useLocalStorage("isAuth");
  const [userInfo] = useLocalStorage("user");

  useEffect(() => {
    setIsAuth(JSON.parse(auth));
  }, [auth]);

  useEffect(() => {
    setUser(JSON.parse(userInfo));
  }, [userInfo]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
