// Imports
import { useEffect, useLayoutEffect as vanillaUseLayoutEffect } from "react";

const isBrowser = typeof window !== "undefined";
const useLayoutEffect = isBrowser ? vanillaUseLayoutEffect : useEffect;

export default useLayoutEffect;
