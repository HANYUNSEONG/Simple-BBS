import React from "react";
import Link from "next/link";
import { HeaderWrapper } from "./styles";
import { useAuth } from "../AuthProvider/AuthProvider";
import { useMutation } from "react-query";
import { logout } from "@/apis/auth";
import Button from "../common/Button";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { toastAtom } from "@/recoil/toast/atom/toast";

const menus = [
  {
    title: "로그인",
    path: "/signin",
    isLogin: false,
  },
  {
    title: "회원가입",
    path: "/signup",
    isLogin: false,
  },
  {
    title: "글쓰기",
    path: "/write",
    isLogin: true,
  },
];

function Header() {
  const router = useRouter();
  const { isLogin } = useAuth();

  const logoutMutation = useMutation(logout);
  const setToastMessage = useSetRecoilState(toastAtom);
  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess() {
        router.push("/signin");
      },
      onError() {
        setToastMessage({
          showing: true,
          type: "error",
          message: "로그인 실패",
        });
      },
    });
  };

  return (
    <HeaderWrapper>
      <h1>
        <Link href="/">Simple BBS</Link>
      </h1>
      <nav>
        <ul>
          {menus.map(
            (menu) =>
              isLogin === menu.isLogin && (
                <li key={menu.path}>
                  <Link href={menu.path}>{menu.title}</Link>
                </li>
              )
          )}
          {isLogin && (
            <li>
              <Button
                onClick={handleLogout}
                buttonSize="small"
                buttonTheme="transparent"
                noStyle
              >
                로그아웃
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
