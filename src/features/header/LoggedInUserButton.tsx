import { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import { AuthContext } from "../../store/context/context";
import useLocalStorage from "../../hooks/useLocalStorage";
import api from "../../services/axios";
import {
  faCartShopping,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoggedInUserButton = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [, setAuth] = useLocalStorage("isAuth");
  const [, updateUser] = useLocalStorage("user");
  const [avatarURL, setAvatarURL] = useState("");

  useEffect(() => {
    if (user?.avatar == "") {
      setAvatarURL(
        "https://static.vecteezy.com/system/resources/previews/016/766/342/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-transparent-background-png.png"
      );
    }
    setAvatarURL(user?.avatar as string);
  }, [user?.avatar]);

  const handleLogout = async () => {
    const response = await api.post(
      "/user/signout",
      JSON.stringify({ account: user?.email })
    );
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
            src={avatarURL}
            alt={user?.username}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex justify-start gap-2 flex-col items-baseline text-sm">
          <p className="font-bold">{user?.username}</p>
          <p>{user?.email}</p>
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
