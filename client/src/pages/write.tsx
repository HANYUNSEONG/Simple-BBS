import WriteForm from "@/components/WriteForm";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Write: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <Head>
        <title>Simple BBS | 글쓰기</title>
      </Head>
      <WriteForm />
    </>
  );
};

export default Write;
