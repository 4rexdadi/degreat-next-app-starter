// Imports
import { useEffect, useLayoutEffect as vanillaUseLayoutEffect } from "react";

// useLayoutEffect only work before components mount and useEffect works immediately components mounts
const isBrowser = typeof window !== "undefined";

// check if  window object is available to determine if components mounts or not
export const useLayoutEffect = isBrowser ? vanillaUseLayoutEffect : useEffect;

export default useLayoutEffect;
