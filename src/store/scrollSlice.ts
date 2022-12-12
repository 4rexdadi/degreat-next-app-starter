// Imports
import { createSlice } from "@reduxjs/toolkit";
import store from "./index";

// Slice
export type AppDispatch = typeof store.dispatch;
export interface scrollProps {
	lenis: any;
	overflow: boolean;
}

const initialState: scrollProps = {
	lenis: undefined,
	overflow: true,
};

const scrollSlice = createSlice({
	name: "scroll",
	initialState: initialState,
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
