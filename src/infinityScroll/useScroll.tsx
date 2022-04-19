import { RefObject, useEffect } from "react";

export default function useScroll(
  parentRef: RefObject<HTMLDivElement>,
  childrenRef: RefObject<HTMLDivElement>,
  cb: () => void
) {
  useEffect(() => {
    const option = {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        cb();
      }
    }, option);

    observer.observe(childrenRef.current as HTMLDivElement);

    return function () {
      observer.unobserve(childrenRef.current as HTMLDivElement);
    };
  }, [cb, childrenRef, parentRef]);
}
