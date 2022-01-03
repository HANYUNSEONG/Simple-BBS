import { ChangeEvent, useState } from "react";

function useInputs() {
  const [inputsData, setInputsData] = useState<{ [key: string]: any }>();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputsData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    inputsData,
    handleChangeInput,
  };
}

export default useInputs;
