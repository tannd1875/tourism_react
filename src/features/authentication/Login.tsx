import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Form from "../../components/Form";
import { useState } from "react";
import api from "../../services/axios";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useLocalStorage from "../../hooks/useLocalStorage";
import PasswordInput from "./PasswordInput";
import { setAccessToken } from "../../services/axios";

const Login = () => {
  const [account, accountAttribute, isValidAccount] = useInput({});
  const [password, passwordAttribute, isValidPassword] = useInput({});
  const [, setIsAuth] = useLocalStorage("isAuth", false);
  const [, setUser] = useLocalStorage("user", "");
  const [isLoginFail, setIsLoginFail] = useState(false);
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(true);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setHasAttemptedLogin(true);

    if (!isValidAccount || !isValidPassword) {
      return;
    }
    if (isValidAccount && isValidPassword) {
      try {
        const response = await api.post("/user/signin", {
          account: account,
          password: password,
        });
        if (response.status === 200) {
          setIsAuth(true);
          setAccessToken(response.data.accessToken);
          setUser(JSON.stringify(response.data));
          window.location.href = "/";
        } else {
          setIsLoginFail(true);
        }
      } catch (error: unknown) {
        setIsLoginFail(true);
        throw new Error(error as string);
      }
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
              Chào mừng trở lại
            </span>
          </div>
          <div className="flex justify-evenly max-sm:flex-col max-sm:gap-2 max-sm:text-sm">
            <Button variant="register">
              <FontAwesomeIcon icon={faGoogle} />
              <span className="ml-2"> Log in with Google</span>
            </Button>
            <Button variant="register">
              <FontAwesomeIcon icon={faFacebookF} />
              <span className="ml-2">Log in with Facebook</span>
            </Button>
          </div>
          <div className="flex justify-between items-center gap-6">
            <hr className="h-0.5 flex-1 bg-white rounded-full block" />
            <span className="bg-inherit font-medium text-2xl block">Or</span>
            <hr className="h-0.5 flex-1 bg-white rounded-full block" />
          </div>
          <Form variant="register">
            <div className="flex flex-col gap-4">
              <label htmlFor="account" className="font-semibold">
                Username or Email
              </label>
              <Input
                type="text"
                variant="text_register"
                id="account"
                {...accountAttribute}
                onFocus={() => {
                  setHasAttemptedLogin(false);
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <PasswordInput
                passwordAttribute={passwordAttribute}
                id="password"
                setHasAttemptedLogin={setHasAttemptedLogin}
              />
            </div>
            {isLoginFail && hasAttemptedLogin && (
              <p className="text-red-700">
                Wrong account or password! Try again
              </p>
            )}
          </Form>
          <Button
            variant={
              !(isValidAccount && isValidPassword)
                ? "register_not_allowed"
                : "register"
            }
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Sign in
          </Button>
          <div>
            <span className="inline-block">Chưa có tài khoản?</span>
            <span className="inline-block underline ml-2 hover:text-blue-600 hover:font-semibold">
              <Link to="/signup">Đăng ký.</Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
