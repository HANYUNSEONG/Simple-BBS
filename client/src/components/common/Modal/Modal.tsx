import { FlexCenter } from "@/theme/util";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface IModalProps {
  children: React.ReactChild;
  status: boolean;
  closeModal: () => void;
}
function Modal({ children, status, closeModal }: IModalProps) {
  return (
    <ModalWrapper status={status} onClick={closeModal}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </ModalWrapper>
  );
}

type ModalWrapperTypes = {
  status: boolean;
};
const ModalWrapper = styled.div<ModalWrapperTypes>`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  ${FlexCenter}
  transition: .3s;
  overflow: hidden;

  ${({ status }) =>
    status
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}

  div.modal_content {
    min-width: 150px;
    max-width: 768px;
    background-color: #fff;
    border-radius: ${({ theme }) => theme.palette.DEFAULT_RADIUS};
  }
`;

export default Modal;
