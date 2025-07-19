import { useState } from "react";
import Button from "../../components/Button";
import useLocalStorage from "../../hooks/useLocalStorage";
import api from "../../services/axios";
import {
  faCartShopping,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux/store";

const LoggedInUserButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setAuth] = useLocalStorage("isAuth");
  const [, updateUser] = useLocalStorage("user");

  const username = useSelector(
    (state: RootState) => state.profile.displayUsername
  );
  const email = useSelector((state: RootState) => state.profile.displayEmail);
  const avatar = useSelector((state: RootState) => state.profile.displayAvatar);

  const handleLogout = async () => {
    const response = await api.post("/user/signout", { account: email });
    if (response) {
      updateUser(JSON.stringify(""));
      setAuth(JSON.stringify(false));
      window.location.href = "/";
    }
  };
  return (
    <div
      onClick={() => {
        if (screen.width <= 480)
          setIsOpen((prev) => (prev === true ? false : true));
      }}
      className={`relative ${
        isOpen ? "hover:bg-zinc-400 hover:shadow-sm hover:text-white" : ""
      }`}
      onMouseEnter={() => {
        if (screen.width > 480) setIsOpen(true);
      }}
      onMouseLeave={() => {
        if (screen.width > 480) setIsOpen(false);
      }}
    >
      <Button
        className="hover:scale-none hover:font-normal flex justify-start gap-4 items-center max-sm:border max-sm:bg-slate-300"
        variant="submenu"
      >
        <div className="w-12 object-cover aspect-square rounded-full overflow-hidden">
          <img
            src={avatar as string}
            alt={username}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex justify-start gap-2 flex-col items-baseline text-sm">
          <p className="font-bold">{username}</p>
          <p>{email}</p>
        </div>
      </Button>
      <div
        className={`${
          isOpen ? "visible" : "hidden"
        } flex flex-col absolute inset-y-full right-0 left-10 z-20`}
      >
        <Button
          variant="submenu"
          to={`/profile`}
          className="border bg-slate-300"
        >
          <FontAwesomeIcon icon={faUser} className="mr-4" />
          Thông tin
        </Button>

        <Button variant="submenu" to={`/cart`} className="border bg-slate-300">
          <FontAwesomeIcon icon={faCartShopping} className="mr-4" />
          Giỏ hàng
        </Button>

        <Button
          variant="submenu"
          className="border bg-slate-300"
          onClick={handleLogout}
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="mr-4" />
          Đăng xuất
        </Button>
      </div>
    </div>
  );
};

export default LoggedInUserButton;
