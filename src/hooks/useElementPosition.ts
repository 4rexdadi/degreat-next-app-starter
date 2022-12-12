// Imports
import { useState, useEffect, RefObject, SetStateAction } from "react";

export const useElementPosition = (el: RefObject<HTMLDivElement>) => {
  function getElement(x: number, y: number) {
    return {
      x: x,
      y: y,
    };
  }

  const [elementPosition, setElementPosition] =
    useState<SetStateAction<{}>>(getElement);

  useEffect(() => {
    function handlePosition() {
      let element = el.current;

      if (element) {
        let x =
          element.getBoundingClientRect().left +
          document.documentElement.scrollLeft +
          element.offsetWidth / 2;
        let y =
          element.getBoundingClientRect().top +
          document.documentElement.scrollTop +
          element.offsetHeight / 2;

        setElementPosition(getElement(x, y));
      }
    }
    handlePosition();
  }, [el]);

  return elementPosition;
};

export default useElementPosition;
