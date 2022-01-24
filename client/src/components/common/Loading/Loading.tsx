import { css } from "@emotion/react";
import styled from "@emotion/styled";

type SizeMap = "small" | "default" | "large";
const loadingSizeMap: {
  [key in SizeMap]: string;
} = {
  small: "30px",
  default: "50px",
  large: "70px",
};

interface ILoadingProps {
  size: SizeMap;
}

function Loading({ size }: ILoadingProps) {
  return <LoadingWrapper size={size} />;
}

const LoadingWrapper = styled.div<{
  size: SizeMap;
}>`
  ${({ size }) => css`
    width: ${loadingSizeMap[size]};
    height: ${loadingSizeMap[size]};
  `}

  border-radius: 50%;
  border-top: 4px solid #444;
  border-right: 4px solid #f5f5f5;

  will-change: transform;
  animation: LoadingAnimation infinite 1s;

  @keyframes LoadingAnimation {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
