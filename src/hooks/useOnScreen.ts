// Imports
import {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export const useOnScreen = (
  ref:
    | RefObject<HTMLElement>
    | MutableRefObject<HTMLElement[]>
    | null
    | undefined,
  threshold: number = 0.3,
  once: boolean = false,
  rootMargin: string = "0px"
) => {
  // use IntersectionObserver to determine if elements are visible or not
  const observer = useRef<IntersectionObserver>();

  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  const [IntersectingElement, setIntersectingElement] =
    useState<null | IntersectionObserverEntry>(null);

  // Update our state when observer callback fires
  const callbackFunction = useCallback(
    (entries: IntersectionObserverEntry[]) =>
      entries.forEach((entry) => {
        setIntersecting(entry?.isIntersecting ?? false);
        setIntersectingElement(entry);
      }),
    []
  );

  useEffect(() => {
    const singleRef = ref?.current;
    if (!singleRef) return undefined;

    // check passed params are Arrays of elements or single element
    // if single element observer single element
    if (!Array.isArray(singleRef)) {
      observer.current = new IntersectionObserver(callbackFunction, {
        rootMargin,
        threshold,
      });

      observer.current.observe(singleRef);

      return () => {
        if (singleRef) {
          // cleanup
          observer.current?.unobserve(singleRef);
        }
      };
    }

    // otherwise observer elements as Array
    if (Array.isArray(singleRef) && singleRef[0]) {
      const refs = singleRef;

      observer.current = new IntersectionObserver(callbackFunction, {
        rootMargin,
        threshold,
      });

      refs.forEach((el) => {
        observer.current?.observe(el);
      });

      return () => {
        if (refs[0]) {
          refs.forEach((el) => {
            // cleanup
            observer.current?.unobserve(el);
          });
        }
      };
    }

    return undefined;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, rootMargin, threshold]);

  useEffect(() => {
    // if once is enabled disconnect observer
    if (once && isIntersecting) {
      observer.current?.disconnect();
    }
  }, [isIntersecting, once]);

  return { isIntersecting, IntersectingElement };
};
export default useOnScreen;
