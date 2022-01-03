import { getProfile } from "@/apis/auth";
import { createContext, useEffect, useState } from "react";

interface IAuthProvider {
  children: React.ReactElement;
}

const AuthContext = createContext<{ isLogin: boolean }>({
  isLogin: false,
});

function AuthProvider({ children }: IAuthProvider) {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    (async () => {
      const userData = await getProfile();
      console.log(userData);
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
