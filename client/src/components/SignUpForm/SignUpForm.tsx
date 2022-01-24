import { SignUpFormBox, SignUpFormWrapper } from "./styles";
import Input from "../common/Input";
import Button from "../common/Button";
import useInputs from "@/hooks/useInputs";
import { FormEvent } from "react";
import { useMutation } from "react-query";
import { signUp } from "@/apis/auth";
import { IUserDefault } from "@/types/auth";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { toastAtom } from "@/recoil/toast/atom/toast";

function SignUpForm() {
  const router = useRouter();
  const [inputValues, setInputValues] = useInputs();
  const setToastMessage = useSetRecoilState(toastAtom);

  const signUpMutation = useMutation((signUpData: IUserDefault) =>
    signUp(signUpData)
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    signUpMutation.mutate(inputValues as IUserDefault, {
      onSuccess: () => {
        setToastMessage({
          type: "success",
          showing: true,
          message: "회원가입이 완료되었습니다.",
        });

        router.push("/signin");
      },
      onError: (error) => {
        console.log(error);
        setToastMessage({
          type: "error",
          showing: true,
          message: "회원가입 중 오류가 발생했습니다.",
        });
      },
    });
  };

  return (
    <SignUpFormWrapper>
      <h1>Simple BBS | 회원가입</h1>
      <SignUpFormBox>
        <Input
          type="text"
          name="username"
          placeholder="아이디를 입력해주세요."
          autoComplete="off"
          inputSize="large"
          onChange={setInputValues}
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          autoComplete="off"
          inputSize="large"
          onChange={setInputValues}
        />
        <Button type="submit" onClick={handleSubmit}>
          완료
        </Button>
      </SignUpFormBox>
    </SignUpFormWrapper>
  );
}

export default SignUpForm;
