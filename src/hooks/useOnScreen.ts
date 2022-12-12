// Imports
import { useState, useEffect, RefObject } from "react";

function useOnScreen(ref: RefObject<HTMLDivElement>, threshold: number = 0.3) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const [IntersectingElement, setIntersectingElement] = useState<boolean | {}>(
    false
  );

  useEffect(() => {
    const singleRef = ref.current;

    if (!Array.isArray(singleRef) && singleRef) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry?.isIntersecting ?? false);
          setIntersectingElement(entry);
        },
        {
          rootMargin: "0px",
          threshold,
        }
      );

      observer.observe(singleRef);

      return () => {
        if (singleRef) {
          observer.unobserve(singleRef);
        }
      };
    }

    return;
  }, [ref, threshold]);

  useEffect(() => {
    const refs = ref.current;

    if (Array.isArray(refs) && refs[0]) {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            // Update our state when observer callback fires
            setIntersecting(entry?.isIntersecting ?? false);
            setIntersectingElement(entry);
          }),
        {
          rootMargin: "0px",
          threshold,
        }
      );

      refs.forEach((el) => {
        observer.observe(el);
      });

      return () => {
        if (refs[0]) {
          refs.forEach((el) => {
            observer.unobserve(el);
          });
        }
      };
    }

    return;
  }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount

  return { isIntersecting, IntersectingElement };
}
export default useOnScreen;
