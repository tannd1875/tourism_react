import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../components/Button";

const responsiveClassMap: { [index: string]: string } = {
  mobile: "border bg-slate-300",
  window: "",
};
const subMenuMap: { [index: string]: string } = {
  mobile: "visible",
  window: "hidden",
};

const Header = () => {
  const [responsive, setResponsive] = useState("window");

  return (
    <header className="bg-gray-200 flex justify-between py-4 px-10 border-2 fixed top-0 left-0 right-0 z-20">
      <a className="flex items-center w-20 hover:cursor-pointer" href="/">
        <img src="./src/assets/img/logo.png" alt="Logo" />
      </a>
      <nav className="flex space-x-4 text-xl pt-2 items-center">
        <FontAwesomeIcon
          icon={faListUl}
          className={`p-4 sm:hidden relative max-sm:${responsiveClassMap[responsive]}`}
          onClick={() =>
            responsive == "window"
              ? setResponsive("mobile")
              : setResponsive("window")
          }
        />
        <div
          className={`max-sm:${subMenuMap[responsive]} flex flex-col sm:flex-row max-sm:absolute max-sm:top-20 max-sm:right-10`}
        >
          <Button
            variant="submenu"
            to={`/direction`}
            className={`max-sm:${responsiveClassMap[responsive]}`}
            onClick={() => setResponsive("window")}
          >
            Điểm đến du lịch
          </Button>

          <Button
            variant="submenu"
            to={`/tip`}
            className={`max-sm:${responsiveClassMap[responsive]}`}
            onClick={() => setResponsive("window")}
          >
            Mẹo du lịch
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
