import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Form from "../../components/Form";
import api from "../../services/axios";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { EMAIL_REGEX, PWD_REGEX, USER_REGEX } from "../../store/regex/regex";
import PasswordInput from "./PasswordInput";

const Register = () => {
  const [username, usernameAttribute, isValidUsername] = useInput({
    regex: USER_REGEX,
  });
  const [email, emailAttribute, isValidEmail] = useInput({
    regex: EMAIL_REGEX,
  });
  const [password, passwordAttribute, isValidPassword] = useInput({
    regex: PWD_REGEX,
  });
  const [confirmPassword, confirmPasswordAttribute, isMatchPassword] = useInput(
    { regex: password }
  );
  const navigator = useNavigate();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (isValidUsername && isValidEmail && isValidPassword && isMatchPassword) {
      const response = await api.post(
        "/user/signup",
        JSON.stringify({
          username: username,
          email: email,
          password: password,
        })
      );
      if (response.status == 201) {
        alert("Đăng ký tài khoản thành công, tiến hành đăng nhập");
        navigator("/login");
      } else {
        alert("Đăng ký thất bại, vui lòng thử lại sau vài phút!");
      }
    } else {
      return;
    }
  };

  return (
    <div className="bg-gray-200 p-10 mt-28">
      <section className="flex justify-start items-center bg-emerald-500 rounded-2xl text-white">
        <div className="w-1/2 overflow-hidden max-sm:hidden">
          <img
            src="./src/assets/img/Register.png"
            alt="Cover"
            className="w-full h-full rounded-tl-2xl rounded-bl-2xl"
          />
        </div>
        <div className="w-1/2 max-sm:w-full p-10 flex flex-col gap-10">
          <div>
            <span className="font-medium text-3xl block">Xin chào!</span>
            <span className="font-medium text-3xl block">
              Chào mừng đến với 1 tour du lịch
            </span>
          </div>
          <div className="flex justify-evenly max-sm:flex-col max-sm:gap-2 max-sm:text-sm">
            <Button variant="register">
              <FontAwesomeIcon icon={faGoogle} />
              <span className="ml-2"> Sign up with Google</span>
            </Button>
            <Button variant="register">
              <FontAwesomeIcon icon={faFacebookF} />
              <span className="ml-2">Sign up with Facebook</span>
            </Button>
          </div>
          <div className="flex justify-between items-center gap-6">
            <hr className="h-0.5 flex-1 bg-white rounded-full block" />
            <span className="bg-inherit font-medium text-2xl block">Or</span>
            <hr className="h-0.5 flex-1 bg-white rounded-full block" />
          </div>
          <Form variant="register">
            <div className="flex flex-col gap-4">
              <label htmlFor="username" className="font-semibold">
                Username
                {isValidUsername && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="ml-2 font-bold text-amber-300 text-xl"
                  />
                )}
              </label>
              <Input
                type="text"
                variant="text_register"
                id="username"
                autoComplete="off"
                {...usernameAttribute}
              />
              {!isValidUsername && username && (
                <p className="text-red-700">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  4 to 24 characters.
                  <br />
                  - Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />- Not allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="font-semibold">
                Email Address
                {isValidEmail && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="ml-2 font-bold text-amber-300 text-xl"
                  />
                )}
              </label>
              <Input
                type="text"
                variant="text_register"
                id="email"
                autoComplete="off"
                {...emailAttribute}
              />
              {!isValidEmail && email && (
                <p className="text-red-700">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  Must follow to Email naming principle
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="password" className="font-semibold">
                Password
                {isValidPassword && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="ml-2 font-bold text-amber-300 text-xl"
                  />
                )}
              </label>
              <PasswordInput
                id={"password"}
                passwordAttribute={passwordAttribute}
              />
              {!isValidPassword && password && (
                <p className="text-red-700">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  Follow rules:
                  <br />
                  - At least 1 lowercase character
                  <br />
                  - At least 1 uppercase character
                  <br />- At least 1 number character
                  <br />- At least have 1 special character
                  <br /> - Minimum length is 8
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="confirm_pwd" className="font-semibold">
                Confirm Password
                {isMatchPassword && confirmPassword && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="ml-2 font-bold text-amber-300 text-xl"
                  />
                )}
              </label>
              <PasswordInput
                id={"confirm_pwd"}
                passwordAttribute={confirmPasswordAttribute}
              />
              {!isMatchPassword && confirmPassword && (
                <p className="text-red-700">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  Must match the first password input field.
                </p>
              )}
            </div>
          </Form>
          <Button
            variant={
              !(
                isValidUsername &&
                isValidEmail &&
                isValidPassword &&
                isMatchPassword
              )
                ? "register_not_allowed"
                : "register"
            }
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Sign up
          </Button>
          <div>
            <span className="inline-block">Đã có tài khoản?</span>
            <span className="inline-block underline ml-2 hover:text-blue-600 hover:font-semibold">
              <Link to="/login">Đăng nhập.</Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
