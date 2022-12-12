import { configureStore } from "@reduxjs/toolkit";
import cursorReducer from "./cursorSlice";
import colorReducer from "./colorSlice";
import scrollReducer from "./scrollSlice";

const store = configureStore({
	reducer: {
		cursorSlice: cursorReducer,
		colorSlice: colorReducer,
		scrollSlice: scrollReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export default store;
