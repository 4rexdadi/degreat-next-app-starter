import { MutableRefObject, useRef } from "react";

const useRefArray = () => {
  // instantiate refArray to be returned with an array of ref objects
  const refArray: MutableRefObject<HTMLElement[]> = useRef([]);

  // setRefArray gets elements and index and add to the refArray
  const setRefArray = (el: HTMLElement | null, index: number) => {
    if (el) {
      refArray.current[index] = el;
    }
  };

  return { refArray, setRefArray };
};

export default useRefArray;
