import { useEffect, useState } from "react";
import Button from "../../components/Button";
import api from "../../services/axios";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/redux/store";
import { updateProfile } from "../../store/redux/slice/profileSlice";
const ProfileSubmitButton = () => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [, , updateUser] = useLocalStorage("user");
  const dispatch = useDispatch<AppDispatch>();
  const username = useSelector((state: RootState) => state.profile.username);
  const email = useSelector((state: RootState) => state.profile.email);
  const avatar = useSelector((state: RootState) => state.profile.avatar);

  useEffect(() => {
    setCanSubmit(true);
  }, [username, email, avatar]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("avatar", avatar);
    try {
      const res = await api.put("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        console.log(res.data);
        updateUser(res.data);
        dispatch(
          updateProfile({
            displayUsername: res.data.username,
            displayEmail: res.data.email,
            displayAvatar: res.data.avatar,
          })
        );
        dispatch(updateProfile(res.data));
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
