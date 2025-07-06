import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import UserButton from "../features/header/UserButton";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsOpen((prev) => (prev === true ? false : true));
  };
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="bg-gray-300 flex justify-between py-4 px-10 border-b-2 fixed top-0 left-0 right-0 z-20">
      <a className="flex items-center w-20 hover:cursor-pointer" href="/">
        <img src="/src/assets/img/logo.png" alt="Logo" />
      </a>
      <nav className="flex space-x-4 text-xl pt-2 items-center">
        <FontAwesomeIcon
          icon={faListUl}
          className={`p-4 sm:hidden relative`}
          onClick={toggleSubMenu}
        />
        <div
          className={`max-sm:${
            isOpen ? "visible" : "hidden"
          } flex flex-col sm:flex-row max-sm:absolute max-sm:top-20 max-sm:right-10`}
        >
          <Button variant="submenu" to={`/product`}>
            Sản phẩm du lịch
          </Button>
          <Button variant="submenu" to={`/direction`}>
            Điểm đến du lịch
          </Button>

          <Button variant="submenu" to={`/tip`}>
            Mẹo du lịch
          </Button>
          <UserButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
