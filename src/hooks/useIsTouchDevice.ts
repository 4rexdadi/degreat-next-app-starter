// Imports
import { useCallback, useState } from "react";

import { useLayoutEffect } from "./useLayoutEffect";

export const useIsTouchDevice = () => {
  // isTouchDevice will always be true or false depending if its a touch device or not
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>();

  const checkIfTouchDevice = useCallback(() => {
    // if Pointer Events are supported, just check maxTouchPoints
    if (window.PointerEvent && "maxTouchPoints" in navigator) {
      if (navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      } else setIsTouchDevice(false);

      if ("ontouchstart" in window) {
        setIsTouchDevice(true);
      } else setIsTouchDevice(false);
    }

    // check for any-pointer:coarse which mostly means touchscreen
    if (
      window.matchMedia &&
      window.matchMedia("(any-pointer:coarse)").matches
    ) {
      setIsTouchDevice(true);

      // last resort - check for exposed touch events API / event handler
    } else if (window.TouchEvent || "ontouchstart" in window) {
      setIsTouchDevice(true);
    } else setIsTouchDevice(false);
  }, []);

  useLayoutEffect(() => {
    // call checkIfTouchDevice on ever client resize to update values
    checkIfTouchDevice();
    window.addEventListener("resize", checkIfTouchDevice, false);

    return () => {
      // cleanup
      window.removeEventListener("resize", checkIfTouchDevice, false);
    };
  }, [checkIfTouchDevice]);

  return isTouchDevice;
};

export default useIsTouchDevice;
