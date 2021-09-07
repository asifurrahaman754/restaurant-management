import { configureStore } from "@reduxjs/toolkit";
import storeSLice from "./storeSLice";

export const store = configureStore({
  reducer: {
    store: storeSLice,
  },
});
