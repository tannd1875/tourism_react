import { useContext } from "react";
import LoggedInUserButton from "./LoggedInUserButton";
import Button from "../../components/Button";
import { AuthContext } from "../../store/context/context";

const UserButton = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      {isAuth ? (
        <LoggedInUserButton />
      ) : (
        <Button variant="submenu" className="border bg-slate-300" to={"/login"}>
          Đăng nhập
        </Button>
      )}
    </>
  );
};

export default UserButton;
