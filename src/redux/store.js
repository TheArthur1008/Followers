import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./slice/filterSlice";
import { followersReducer } from "./slice/followersSlice";

export const store = configureStore({
  reducer: {
    followers: followersReducer,
    filters: filtersReducer,
  },
});
