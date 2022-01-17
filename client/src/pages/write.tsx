import WriteForm from "@/components/WriteForm";
import { NextPage } from "next";
import Head from "next/head";

const Write: NextPage = () => {
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
