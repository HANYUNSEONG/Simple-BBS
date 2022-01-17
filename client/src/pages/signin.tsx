import { NextPage } from "next";
import SignInForm from "@/components/SignInForm";
import Head from "next/head";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simple BBS | 로그인</title>
      </Head>
      <SignInForm />
    </>
  );
};

export default Login;
