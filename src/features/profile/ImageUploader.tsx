import { useContext, useEffect, useState } from "react";
import AvatarButton from "./AvatarButton";
import { ProfileContext } from "../../store/context/context";

const ImageUploader = () => {
  const { avatar, setAvatar } = useContext(ProfileContext);
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (typeof avatar === "string") {
      setUrl(avatar);
    }
    if (avatar instanceof File) {
      setUrl(URL.createObjectURL(avatar));
    }
  }, [avatar]);

  return (
    <div className="lg:w-2/3 relative lg:ml-20">
      <div className="border-2 rounded-full overflow-hidden w-full aspect-square ">
        <img
          src={url}
          alt="Avatar"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <AvatarButton setAvatar={setAvatar} />
    </div>
  );
};

export default ImageUploader;
