import { combineReducers } from "@reduxjs/toolkit";
import slice from "./slice";

export const rootReducer = combineReducers({
  main: slice,
});


