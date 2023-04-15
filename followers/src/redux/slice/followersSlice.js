import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFollowers,
  addFollower,
  deleteFollower,
  toggleCompleted,
} from "../thunk";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const followersSlice = createSlice({
  name: "followers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchFollowers.pending]: handlePending,
    [fetchFollowers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchFollowers.rejected]: handleRejected,
    [addFollower.pending]: handlePending,
    [addFollower.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addFollower.rejected]: handleRejected,
    [deleteFollower.pending]: handlePending,
    [deleteFollower.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (follower) => follower.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteFollower.rejected]: handleRejected,
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (follower) => follower.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleCompleted.rejected]: handleRejected,
  },
});

export const followersReducer = followersSlice.reducer;
