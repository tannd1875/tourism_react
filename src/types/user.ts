export type User = {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  phone?: string;
  role?: string;
  address?: string;
  accessToken?: string;
};

export type UserKey = keyof User;
