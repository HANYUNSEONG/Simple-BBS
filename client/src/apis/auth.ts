import { IUserDefault } from "@/types/auth";
import customAxios from "./customAxios";

export const signIn = async (loginData: IUserDefault) => {
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

export const signUp = async (signUpData: IUserDefault) => {
  return await customAxios.post(`/auth/signup`, signUpData);
};

export const accessTokenRenewal = async () => {
  return await customAxios.get(`/auth/refresh`);
};
