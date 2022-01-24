import { ChangeEvent, useState } from "react";

function useInputs<T>(
  defaultValue?: T
): [
  { [key: string]: any } | undefined,
  (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
] {
  const [inputsData, setInputsData] = useState<{ [key: string]: any }>(
    defaultValue ?? {}
  );

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setInputsData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return [inputsData, handleChangeInput];
}

export default useInputs;
