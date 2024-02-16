import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "http://localhost:4000";

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const res = await response.json();
        return res;
      }
    } catch (error) {
      console.log(`users/login - ${error}`);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
