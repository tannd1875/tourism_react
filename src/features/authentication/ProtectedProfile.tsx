import { Navigate, Outlet } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const ProtectedProfile = () => {
  const [isAuth] = useLocalStorage("isAuth");
  return (JSON.parse(isAuth) as boolean) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedProfile;
