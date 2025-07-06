import { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import { AuthContext, ProfileContext } from "../../store/context/context";
import api from "../../services/axios";
import useLocalStorage from "../../hooks/useLocalStorage";

const ProfileSubmitButton = () => {
  const { username, email, avatar } = useContext(ProfileContext);
  const { user } = useContext(AuthContext);
  const [canSubmit, setCanSubmit] = useState(false);
  const [, , updateUser] = useLocalStorage("user");
  useEffect(() => {
    setCanSubmit(true);
  }, [username, email, avatar]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("avatar", avatar);
    formData.append("accessToken", user?.accessToken as string);
    try {
      const res = await api.put("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        console.log(res.data);
        updateUser(res.data);
        window.location.reload();
      }
    } catch (error) {
      throw new Error(error as unknown as string);
    }
  };

  return (
    <Button
      className={`float-right mr-4 ${
        canSubmit
          ? ""
          : "hover:cursor-not-allowed hover:scale-none hover:font-normal"
      }`}
      variant={"info"}
      onClick={handleSubmit}
    >
      Update
    </Button>
  );
};

export default ProfileSubmitButton;
