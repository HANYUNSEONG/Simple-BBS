import { toastAtom } from "@/recoil/atom/toast";
import { ToastColor } from "@/theme/toast";
import { StatusCodeType } from "@/types/toast";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

function Toast() {
  const [{ showing, type, message }, setToastState] = useRecoilState(toastAtom);

  useEffect(() => {
    if (showing) {
      setTimeout(() => {
        setToastState({
          showing: false,
          type: "info",
          message: "",
        });
      }, 2000);
    }
  }, [setToastState, showing]);

  return (
    <ToastWrapper showing={showing} statusType={type}>
      {message}
    </ToastWrapper>
  );
}

type ToastWrapperTypes = {
  statusType: StatusCodeType;
  showing: boolean;
};
const ToastWrapper = styled.div<ToastWrapperTypes>`
  max-width: 250px;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 0 8px 2px #efefef;
  border-radius: 10px;
  text-align: center;

  color: ${({ statusType }) => ToastColor[statusType].fontColor};
  background-color: ${({ statusType }) =>
    ToastColor[statusType].backgroundColor};

  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  transition: 0.3s;
  ${({ showing }) =>
    showing
      ? css`
          top: 30px;
          opacity: 1;
        `
      : css`
          top: 0;
          opacity: 0;
        `}
`;

export default Toast;
