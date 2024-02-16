import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "http://localhost:4000";
export const signupUser = createAsyncThunk(
  "users/signup",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/signup`, {
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
      } else {
        return thunkAPI.rejectWithValue(response);
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
