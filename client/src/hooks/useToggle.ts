import { useCallback, useState } from "react";

const useToggle = (): [boolean, () => void] => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setToggle((toggle) => !toggle);
  }, []);

  return [toggle, handleToggle];
};

export default useToggle;
