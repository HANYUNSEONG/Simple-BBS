import CustomAxios from "@/apis/customAxios";
import { IUser } from "@/types/auth";
import { createContext, useContext } from "react";
import { Context } from "vm";

interface IAuthContext {
  userData: IUser | null;
  isLogin: boolean;
}
interface IAuthProvider {
  children: React.ReactElement;
  authData?: IAuthContext;
}

const initialState = {
  userData: null,
  isLogin: false,
};

export const AuthContext = createContext<IAuthContext>({
  userData: null,
  isLogin: false,
});

export const getUser = async (ctx: Context) => {
  const cookies = ctx.req
    ? Object.entries(ctx.req?.cookies)
        .map(([key, value]) => {
          return `${key}=${value}`;
        })
        .join(";")
    : "";

  return await CustomAxios.get(`/auth/me`, {
    headers: ctx.req ? { Cookie: cookies } : {},
    withCredentials: true,
  })
    .then((response) => {
      if (response.data) {
        CustomAxios.defaults.headers.common = {
          Cookie: cookies,
        };

        return {
          isLogin: true,
          userData: response.data,
        };
      }
    })
    .catch((error) => {
      return {
        isLogin: false,
        userData: null,
      };
    });
};

function AuthProvider({ children, authData }: IAuthProvider) {
  return (
    <AuthContext.Provider value={authData ?? initialState}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
