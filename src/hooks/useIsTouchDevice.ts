// Imports
import { useCallback, useState } from "react";

import useLayoutEffect from "./useLayoutEffect";

export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>();

  const checkIfTouchDevice = useCallback(() => {
    if (window.PointerEvent && "maxTouchPoints" in navigator) {
      // if Pointer Events are supported, just check maxTouchPoints

      if (navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      } else setIsTouchDevice(false);

      if ("ontouchstart" in window) {
        setIsTouchDevice(true);
      } else setIsTouchDevice(false);
    } else {
      // no Pointer Events...

      if (
        window.matchMedia &&
        window.matchMedia("(any-pointer:coarse)").matches
      ) {
        // check for any-pointer:coarse which mostly means touchscreen

        setIsTouchDevice(true);
      } else if (window.TouchEvent || "ontouchstart" in window) {
        // last resort - check for exposed touch events API / event handler

        setIsTouchDevice(true);
      } else setIsTouchDevice(false);
    }
  }, []);

  useLayoutEffect(() => {
    checkIfTouchDevice();
    window.addEventListener("resize", checkIfTouchDevice, false);

    return () => {
      window.removeEventListener("resize", checkIfTouchDevice, false);
    };
  }, []);

  return isTouchDevice;
};

export default useIsTouchDevice;
