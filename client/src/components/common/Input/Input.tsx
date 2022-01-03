import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

type sizeTypes = "small" | "default" | "large";
const sizeMap: { [key in sizeTypes]: string } = {
  small: ".3rem .6rem",
  default: "0.8rem 1rem",
  large: "1.2rem 1.5rem",
};

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: sizeTypes;
  label?: string;
}
function Input({ inputSize = "default", ...rest }: IInputProps) {
  return (
    <InputWrapper size={sizeMap[inputSize]}>
      <input {...rest} />
    </InputWrapper>
  );
}

type InputWrapperTypes = {
  size: string;
};
const InputWrapper = styled.div<InputWrapperTypes>`
  & input {
    width: 100%;
    font-size: 1rem;
    padding: ${({ size }) => size};
    border-radius: 5px;
    border: 1px solid #ddd;
  }
`;

export default Input;
