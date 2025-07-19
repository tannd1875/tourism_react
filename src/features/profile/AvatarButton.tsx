import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/redux/store";
import { updateProfile } from "../../store/redux/slice/profileSlice";

const AvatarButton = () => {
  const [onHover, setOnHover] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      dispatch(updateProfile({ avatar: e.target.files[0] }));
    }
  };
  return (
    <div
      className="absolute lg:bottom-6 lg:left-16 bottom-4
      lg:text-xl text-base grid place-content-center"
    >
      <input
        className="hidden"
        type="file"
        id="uploadButton"
        accept="image/*"
        onChange={(e) => {
          handleFileChange(e);
        }}
      />
      <label
        htmlFor="uploadButton"
        className={`inline-block select-none font-bold text-white bg-emerald-500 cursor-pointer
       border-white p-3 text-center rounded-full ${
         !onHover && "aspect-square"
       }`}
        onMouseEnter={() => {
          setOnHover(true);
        }}
        onMouseLeave={() => {
          setOnHover(false);
        }}
      >
        <FontAwesomeIcon icon={faUpload} className="lg:text-xl text-base" />
        {onHover && (
          <span className="inline-block ml-2 animate-slideIn">
            Change Avatar
          </span>
        )}
      </label>
    </div>
  );
};

export default AvatarButton;
