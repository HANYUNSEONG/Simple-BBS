import { useState } from "react";

const useModal = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  const openModal = () => {
    setModalStatus(() => true);
  };

  const closeModal = () => {
    setModalStatus(() => false);
  };

  return {
    status: modalStatus,
    openModal,
    closeModal,
  };
};

export default useModal;
