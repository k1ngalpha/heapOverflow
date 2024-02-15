import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "http://localhost:4000";

export const addQuestions = createAsyncThunk(
  "/questions/ask",
  async ({ title, body, tags }, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/questions/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body, tags }),
      });
      if (response.ok) {
        const res = await response.json();
        return res;
      }
    } catch (error) {
      console.log(`questions/ask = ${error}`);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
