import React, { useContext, useEffect, useState } from "react";
import { AuthContext, ProfileContext } from "./context";

const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string | File>(
    "https://static.vecteezy.com/system/resources/previews/016/766/342/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-transparent-background-png.png"
  );

  useEffect(() => {
    if (user?.username) {
      setUsername(user.username);
    }
    if (user?.email) {
      setEmail(user.email);
    }
    if (user?.avatar) {
      setAvatar(user.avatar as string);
    }
  }, [user]);

  return (
    <ProfileContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        avatar,
        setAvatar,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
