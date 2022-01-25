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
  noStyle?: boolean;
}
function Button({
  children,
  buttonSize = "default",
  buttonTheme = "black",
  noStyle = false,
  ...rest
}: IButton) {
  return (
    <ButtonWrapper
      size={sizeMap[buttonSize]}
      buttonTheme={buttonTheme}
      noStyle={noStyle}
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );
}

type ButtonWrapperTypes = {
  size: string;
  buttonTheme: CommonColorType;
  noStyle?: boolean;
};
const ButtonWrapper = styled.button<ButtonWrapperTypes>`
  border: none;
  font-size: 1rem;
  /* font-weight: bold; */
  cursor: pointer;
  transition: 0.3s;

  ${({ noStyle, size }) =>
    !noStyle &&
    css`
      border-radius: 5px;
      padding: ${size};
    `};

  ${({ buttonTheme }) => css`
    background-color: ${CommonColor[buttonTheme].backgroundColor};
    color: ${CommonColor[buttonTheme].fontColor};
  `}
`;

export default Button;
