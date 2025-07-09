import { useState, ReactNode, useEffect } from "react";
import { User } from "../../types/user";
import { AuthContext } from "./context";
import useLocalStorage from "../../hooks/useLocalStorage";
import api from "../../services/axios";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [auth] = useLocalStorage("isAuth");
  const [userInfo] = useLocalStorage("user");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setIsAuth(JSON.parse(auth));
  }, [auth]);

  useEffect(() => {
    setUser(JSON.parse(userInfo));
    setAccessToken(JSON.parse(userInfo).accessToken);
  }, [userInfo]);

  // run first when app run
  const initializeAuth = async () => {
    try {
      // Try to get access token using refresh token
      const response = await api.post("/user/refresh_token");
      const { accessToken, user } = response.data;

      if (accessToken) {
        setAccessToken(accessToken); //import later
        setIsAuth(true);

        // decoded from accessToken or response.data => setUser
        setUser(user);
        // setAuthState({
        //   isAuthenticated: true,
        //   loading: false,
        //   user: null, // You might want to decode user info from token
        // });
      } else {
        setIsAuth(false);
        setUser(null);
        // setAuthState({
        //   isAuthenticated: false,
        //   loading: false,
        //   user: null,
        // });
      }
    } catch (error) {
      console.error("Auth initialization failed:", error);
      setIsAuth(false);
      setUser(null);
      // setAuthState({
      //   isAuthenticated: false,
      //   loading: false,
      //   user: null,
      // });
    }
  };

  // useEffect(() => {
  //   initializeAuth();
  // });

  // useEffect(() => {
  //   console.log("Update accessToken:", accessToken);
  // }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, user, setUser, accessToken, setAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
