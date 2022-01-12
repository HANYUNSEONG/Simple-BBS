import { FormEvent } from "react";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import Button from "../common/Button";
import Input from "../common/Input";
import { SignInFormBox, SignInFormWrapper } from "./styles";
import { signIn } from "@/apis/auth";
import useInputs from "@/hooks/useInputs";
import { toastAtom } from "@/recoil/toast/atom/toast";
import { ISignIn } from "@/types/auth";

function SignInForm() {
  const router = useRouter();
  const [inputsData, handleChangeInput] = useInputs();
  const setToastMessage = useSetRecoilState(toastAtom);

  const mutation = useMutation((loginData: ISignIn) => signIn(loginData));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(inputsData as ISignIn, {
      onSuccess: () => {
        setToastMessage({
          showing: true,
          type: "success",
          message: "로그인 완료",
        });

        router.push("/");
      },
      onError: () => {
        setToastMessage({
          showing: true,
          type: "error",
          message: "로그인 실패",
        });
      },
    });
  };

  return (
    <SignInFormWrapper>
      <h1>로그인</h1>
      <SignInFormBox onSubmit={handleSubmit}>
        <Input
          placeholder="아이디를 입력해주세요."
          inputSize="large"
          name="username"
          onChange={handleChangeInput}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          inputSize="large"
          onChange={handleChangeInput}
        />
        <Button type="submit">로그인</Button>
      </SignInFormBox>
    </SignInFormWrapper>
  );
}

export default SignInForm;
