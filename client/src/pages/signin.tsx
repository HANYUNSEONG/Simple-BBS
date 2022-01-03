import { NextPage } from "next";
import SignInForm from "@/components/SignInForm";

const Login: NextPage = () => {
  return <SignInForm />;
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Login;
