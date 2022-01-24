import { FormEvent, useState } from "react";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import Button from "../common/Button";
import Input from "../common/Input";
import { SignInFormBox, SignInFormWrapper } from "./styles";
import { signIn } from "@/apis/auth";
import useInputs from "@/hooks/useInputs";
import { toastAtom } from "@/recoil/toast/atom/toast";
import { IUserDefault } from "@/types/auth";

function SignInForm() {
  const router = useRouter();
  const [inputsData, handleChangeInput] = useInputs(null);
  const [errorText, setErrorText] = useState<string | null>(null);
  const setToastMessage = useSetRecoilState(toastAtom);

  const mutation = useMutation((loginData: IUserDefault) => signIn(loginData));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorText(null);

    mutation.mutate(inputsData as IUserDefault, {
      onSuccess: () => {
        setToastMessage({
          showing: true,
          type: "success",
          message: "로그인 완료",
        });

        router.push("/");
      },
      onError: (error: any) => {
        const errorMessage = error.response.data?.message;
        if (errorMessage && typeof errorMessage === "object") {
          setErrorText(() => errorMessage.join("\r\n"));
        } else {
          setErrorText(() => errorMessage);
        }

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
        {errorText && <p>{errorText}</p>}
        <Button type="submit">로그인</Button>
      </SignInFormBox>
    </SignInFormWrapper>
  );
}

export default SignInForm;
