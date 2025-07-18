import useFetchList from "../../hooks/useFetchList";
import "../../styles/dropdown.css";
import { Province } from "../../types/type";

const DropDownMenu = ({
  setAddress,
}: {
  setAddress: (arg: string) => void;
}) => {
  const [dropDownList] = useFetchList({
    path: "/province",
    query: {},
  });

  const handleDropDown = () => {
    const select = document.querySelector(".select");
    const caret = document.querySelector(".caret");
    const menu = document.querySelector(".menu");
    const options = document.querySelectorAll(".menu li");
    const selected = document.querySelector(".selected");

    select?.addEventListener("click", () => {
      select.classList.toggle("select-clicked");
      caret?.classList.toggle("caret-rotate");
      menu?.classList.toggle("menu-open");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        (selected as HTMLElement).innerText = (option as HTMLElement).innerText;
        setAddress((option as HTMLElement).innerText);
        select?.classList.remove("select-clicked");
        caret?.classList.remove("caret-rotate");
        menu?.classList.remove("menu-open");
        options.forEach((option) => {
          option.classList.remove("active");
        });
        option.classList.add("active");
      });
    });
  };
  return (
    <div className="dropdown" onClick={handleDropDown}>
      <div className="select">
        <span className="selected">Tỉnh/Thành phố</span>
        <div className="caret"></div>
      </div>
      <ul className="menu">
        {(dropDownList as Province[]).map((item) => {
          return <li key={item._id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default DropDownMenu;
