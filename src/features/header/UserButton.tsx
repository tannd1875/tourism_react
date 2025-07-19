import LoggedInUserButton from "./LoggedInUserButton";
import Button from "../../components/Button";
import useLocalStorage from "../../hooks/useLocalStorage";

const UserButton = () => {
  const [isAuth] = useLocalStorage("isAuth");
  return (
    <>
      {(JSON.parse(isAuth) as boolean) ? (
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
