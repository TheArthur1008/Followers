import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://643a8c7c90cd4ba563fbeae2.mockapi.io";

export const fetchFollowers = createAsyncThunk(
  "followers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/followers");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFollower = createAsyncThunk(
  "followers/addFollower",
  async ({ user, tweets, followers, avatar }, thunkAPI) => {
    try {
      const response = await axios.post("/followers", {
        user,
        tweets,
        followers,
        avatar,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFollower = createAsyncThunk(
  "followers/deleteFollower",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/followers/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "followers/toggleCompleted",
  async (follower, thunkAPI) => {
    try {
      const response = await axios.put(`/followers/${follower.id}`, {
        completed: !follower.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
