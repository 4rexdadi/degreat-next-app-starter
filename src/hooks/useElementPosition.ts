// Imports
import { RefObject, useEffect, useState } from "react";

export const useElementPosition = (el: RefObject<HTMLElement>) => {
  // set all values to default(0) on server load before all vales are gotten on client load
  const initialLoad = {
    x: 0,
    y: 0,
    offsetWidth: 0,
    offsetHeight: 0,
    clientWidth: 0,
    clientHeight: 0,
  };

  const [elementPosition, setElementPosition] = useState(initialLoad);

  const getElement = (
    x: number,
    y: number,
    offsetWidth: number,
    offsetHeight: number,
    clientWidth: number,
    clientHeight: number
  ) => {
    // receive all vales and return as an object
    return {
      x,
      y,
      offsetWidth,
      offsetHeight,
      clientWidth,
      clientHeight,
    };
  };

  useEffect(() => {
    // function that gets all values from passed-element and call setElementPosition function
    const handlePosition = () => {
      const element = el.current;

      if (element) {
        const x =
          element.getBoundingClientRect().left +
          document.documentElement.scrollLeft +
          element.offsetWidth / 2;

        const y =
          element.getBoundingClientRect().top +
          document.documentElement.scrollTop +
          element.offsetHeight / 2;

        const { offsetWidth } = element;

        const { offsetHeight } = element;

        const { clientWidth } = element;

        const { clientHeight } = element;

        setElementPosition(
          getElement(x, y, offsetWidth, offsetHeight, clientWidth, clientHeight)
        );
      }
    };
    handlePosition();

    window.addEventListener("resize", handlePosition);

    // cleanup
    return () => window.removeEventListener("resize", handlePosition);
  }, [el]);

  return elementPosition;
};

export default useElementPosition;
