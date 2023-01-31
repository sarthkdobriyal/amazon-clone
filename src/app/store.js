import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//Global Store setup
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
