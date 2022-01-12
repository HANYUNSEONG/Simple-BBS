import { IUser } from "@/types/auth";
import { atom } from "recoil";

export const authAtom = atom<{
  userData: IUser | null;
  isLogin: boolean;
}>({
  key: "auth",
  default: {
    userData: null,
    isLogin: false,
  },
});
