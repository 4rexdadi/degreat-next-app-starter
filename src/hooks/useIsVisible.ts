// Imports
import { useCallback, useEffect, useRef, useState } from "react";

interface useIsVisibleProp {
  root?: any;
  rootMargin?: string;
  threshold: number;
  once?: boolean;
}

export const useIsVisible = ({
  root = null,
  rootMargin = "0px",
  threshold = 1.0,
  once = false,
}: useIsVisibleProp) => {
  const observer = useRef<IntersectionObserver>();
  const ref = useRef<Element | null | undefined>();
  const [inView, setInView] = useState(false);

  const setRef = (node: Element | null | undefined) => {
    if (!ref.current) {
      ref.current = node;
    }
  };

  const callbackFunction = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setInView(entry.isIntersecting);
    },
    []
  );

  useEffect(() => {
    observer.current = new IntersectionObserver(callbackFunction, {
      root,
      rootMargin,
      threshold,
    });
    if (ref.current) observer.current.observe(ref.current);
    return () => {
      observer.current?.disconnect();
    };
  }, [callbackFunction]);

  useEffect(() => {
    if (once && inView) {
      observer.current?.disconnect();
    }
  }, [inView]);

  return { setRef, inView };
};

export default useIsVisible;
