// Imports
import { createSlice } from "@reduxjs/toolkit";
import Lenis from "@studio-freight/lenis";

// Slice
export interface ScrollProps {
  lenis: Lenis | undefined;
  overflow: boolean;
}

const initialState: ScrollProps = {
  lenis: undefined,
  overflow: true,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setLenis: (state, action) => {
      state.lenis = action.payload;
    },
    setOverflow: (state, action) => {
      state.overflow = action.payload;
    },
  },
});

export const { setLenis, setOverflow } = scrollSlice.actions;
export default scrollSlice.reducer;
