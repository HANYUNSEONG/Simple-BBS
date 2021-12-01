import { CommonColor, CommonColorType } from "@/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

type sizeTypes = "small" | "default" | "large";
const sizeMap: { [key in sizeTypes]: string } = {
  small: ".3rem .6rem",
  default: "0.8rem 1rem",
  large: "1.2rem 1.5rem",
};

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  full?: boolean;
  buttonSize?: sizeTypes;
  buttonTheme?: CommonColorType;
}
function Button({
  children,
  buttonSize = "default",
  buttonTheme = "black",
  ...rest
}: IButton) {
  return (
    <ButtonWrapper
      size={sizeMap[buttonSize]}
      buttonTheme={buttonTheme}
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );
}

type ButtonWrapperTypes = {
  size: string;
  buttonTheme: CommonColorType;
};
const ButtonWrapper = styled.button<ButtonWrapperTypes>`
  padding: ${({ size }) => size};
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;

  ${({ buttonTheme }) => css`
    background-color: ${CommonColor[buttonTheme].backgroundColor};
    color: ${CommonColor[buttonTheme].fontColor};
  `}
`;

export default Button;
