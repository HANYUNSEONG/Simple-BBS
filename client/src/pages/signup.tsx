import SignUpForm from "@/components/SignUpForm";
import { NextPage } from "next";
import Head from "next/head";

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simple BBS | 회원가입</title>
      </Head>
      <SignUpForm />
    </>
  );
};

export default SignUp;
