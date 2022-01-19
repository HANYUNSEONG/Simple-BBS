import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { InputHTMLAttributes, Ref } from "react";

type sizeTypes = "small" | "default" | "large";
const sizeMap: { [key in sizeTypes]: string } = {
  small: ".3rem .6rem",
  default: "0.8rem 1rem",
  large: "1.2rem 1.5rem",
};

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: sizeTypes;
  label?: string;
  noStyle?: boolean;
}
function Input({ inputSize = "default", noStyle, ...rest }: IInputProps) {
  return (
    <InputWrapper size={sizeMap[inputSize]} noStyle={noStyle}>
      <input {...rest} />
    </InputWrapper>
  );
}

type InputWrapperTypes = {
  size: string;
  noStyle?: boolean;
};
const InputWrapper = styled.div<InputWrapperTypes>`
  & input {
    width: 100%;
    font-size: 1rem;
    padding: ${({ size }) => size};

    ${({ noStyle }) =>
      !noStyle &&
      css`
        border-radius: 5px;
        border: 1px solid #ddd;
      `}
  }
`;

export default Input;
