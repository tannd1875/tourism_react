import Input from "../../components/Input";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAttributes } from "../../hooks/useInput";
import { useState } from "react";

const PasswordInput = ({
  id,
  passwordAttribute,
  setHasAttemptedLogin,
}: {
  id: string;
  passwordAttribute: InputAttributes;
  setHasAttemptedLogin?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [hide, setHide] = useState(true);
  return (
    <div className="relative">
      <Input
        type={hide ? "password" : "text"}
        variant="text_register"
        id={id}
        className="w-full"
        {...passwordAttribute}
        onFocus={() => {
          setHasAttemptedLogin?.(false);
        }}
      />
      <div
        className="absolute z-10 right-4 text-emerald-500 bottom-4"
        onClick={() => {
          setHide(!hide);
        }}
      >
        <FontAwesomeIcon icon={hide ? faEyeSlash : faEye} className="w-8" />
      </div>
    </div>
  );
};

export default PasswordInput;
