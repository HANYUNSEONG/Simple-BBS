import Link from "next/link";

function Custom500() {
  return (
    <div>
      <h1>서버 오류가 났다요</h1>
      <Link href="/">홈으로 가자요</Link>
    </div>
  );
}

export default Custom500;
