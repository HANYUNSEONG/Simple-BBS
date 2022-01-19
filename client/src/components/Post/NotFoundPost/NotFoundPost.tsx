import Link from "next/link";
import { NotFoundPostWrapper } from "./styles";

function NotFoundPost() {
  return (
    <NotFoundPostWrapper>
      <h1>없는 게시물 입니다.</h1>
      <Link href="/">메인으로 이동하기</Link>
    </NotFoundPostWrapper>
  );
}

export default NotFoundPost;
