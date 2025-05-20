const responsiveClassMap: { [index: string]: string } = {
  mobile: "border bg-slate-300",
  window: "",
};

const HeaderSubMenu = (props: {
  body: string;
  href: string;
  responsive: string;
  setResponsive(arg: string): void;
}) => {
  return (
    <>
      <a
        href={props.href}
        className={`text-black p-4 hover:bg-zinc-400 hover:shadow-sm rounded hover:text-white max-sm:${
          responsiveClassMap[props.responsive]
        }`}
        onClick={() => props.setResponsive("window")}
      >
        {props.body}
      </a>
    </>
  );
};

export default HeaderSubMenu;
