import { ISignIn } from "@/types/auth";
import customAxios from "./customAxios";

export const signIn = async (loginData: ISignIn) => {
  return await customAxios.post(`/auth/signin`, loginData);
};

export const getProfile = async (cookies?: string) => {
  return await customAxios.get(`/auth/me`, {
    headers: {
      Cookie: cookies || "",
    },
  });
};

export const logout = async () => {
  return await customAxios.post(`/auth/logout`);
};
