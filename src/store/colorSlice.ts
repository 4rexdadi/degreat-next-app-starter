// Imports
import { createSlice } from "@reduxjs/toolkit";

// Slice
const colorSlice = createSlice({
	name: "color",
	initialState: {
		currentColor: null,
		currentTheme: "dark",
		sidebarColor: "white",
	},

	reducers: {
		setCurrentColor: (state, action) => {
			state.currentColor = action.payload;
		},
		setCurrentTheme: (state, action) => {
			state.currentTheme = action.payload;
		},
		setSidebarColor: (state, action) => {
			state.sidebarColor = action.payload;
		},
	},
});

export const { setCurrentColor, setCurrentTheme, setSidebarColor } =
	colorSlice.actions;
export default colorSlice.reducer;
