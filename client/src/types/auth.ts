export interface ISignIn {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  username: string;
  refreshToken: string;
}
