import CustomAxios from "@/apis/customAxios";
import Link from "next/link";
import { HeaderWrapper } from "./styles";

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
  return (
    <HeaderWrapper>
      <h1>
        <Link href="/">Simple BBS</Link>
      </h1>
      <nav>
        <ul>
          {menus.map((menu) => (
            <li key={menu.path}>
              <Link href={menu.path}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
