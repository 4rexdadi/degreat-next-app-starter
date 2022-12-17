// Import
import { configureStore } from "@reduxjs/toolkit";

import colorReducer from "./colorSlice";
import cursorReducer from "./cursorSlice";
import scrollReducer from "./scrollSlice";

export type AppDispatch = typeof store.dispatch;

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
