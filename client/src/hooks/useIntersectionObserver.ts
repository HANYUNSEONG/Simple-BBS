import { useEffect, useState } from "react";

interface IUseIntersectionObserver {
  options?: { root?: null; rootMargin?: string; threshold?: number };
  callback: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
  options,
  callback,
}: IUseIntersectionObserver) => {
  /*
    ref를 props로 받아서 할 수 있지만 그렇게 하면 초기에 null인 ref가 변경되어도
    useEffect가 트리거 되지 않기 떄문에 변화 감지를 위해 useState를 사용했다.
  */
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(callback, {
      ...options,
    });

    observer.observe(target);
    return () => observer.disconnect();
  }, [callback, target, options]);

  return {
    setTarget,
  };
};

export default useIntersectionObserver;
