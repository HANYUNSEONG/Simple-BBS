import Link from "next/link";
function Custom404() {
  return (
    <div>
      <h1>페이지가 없다요</h1>
      <Link href="/">홈으로 가자요</Link>
    </div>
  );
}

export default Custom404;
