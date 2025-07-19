import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProfileState = {
  username: string;
  email: string;
  avatar: string | File;
  displayUsername: string;
  displayEmail: string;
  displayAvatar: string | File;
};

export type ProfileKey = keyof ProfileState;

const user = JSON.parse(JSON.parse(localStorage.getItem("user") as string));

const INIT_PROFILE_STATE: ProfileState = {
  username: user.username,
  email: user.email,
  avatar:
    user.avatar ??
    "https://static.vecteezy.com/system/resources/previews/016/766/342/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-transparent-background-png.png",
  displayUsername: user.username,
  displayEmail: user.email,
  displayAvatar:
    user.avatar ??
    "https://static.vecteezy.com/system/resources/previews/016/766/342/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-transparent-background-png.png",
};

const profileSlice = createSlice({
  name: "profile",
  initialState: INIT_PROFILE_STATE,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
      Object.assign(state, action.payload);
    },
  },
});

export default profileSlice.reducer;

export const { updateProfile } = profileSlice.actions;
