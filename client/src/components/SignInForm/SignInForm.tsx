import Button from "../common/Button";
import Input from "../common/Input";
import { SignInFormBox, SignInFormWrapper } from "./styles";

function SignInForm() {
  return (
    <SignInFormWrapper>
      <h1>로그인</h1>
      <SignInFormBox>
        <Input placeholder="아이디를 입력해주세요." inputSize="large" />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          inputSize="large"
        />
        <Button type="submit">로그인</Button>
      </SignInFormBox>
    </SignInFormWrapper>
  );
}

export default SignInForm;
