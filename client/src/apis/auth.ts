import { ISignIn } from "@/types/auth";
import customAxios from "./customAxios";

export const signIn = async (loginData: ISignIn) => {
  return await customAxios.post(`/auth/signin`, loginData);
};

export const getProfile = async () => {
  return await customAxios.get(`/auth/me`);
};
