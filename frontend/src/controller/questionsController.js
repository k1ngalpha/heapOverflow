import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "http://localhost:4000";

export const addQuestions = createAsyncThunk(
  "/questions/ask",
  async ({ title, body, tags }, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/questions/ask`, {
        method: "POST",
        credentials: "include",
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

//Display addl question
export const displayAllQuestions = createAsyncThunk(
  "/",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/`, {
        method: "GET",
        //credentials: "include",
      });
      if (response.ok) {
        const body = await response.json();

        const res = body.map((question) => ({
          ...question,
          tags:
            question.tags && question.tags.length > 0
              ? question.tags[0].split(", ")
              : [],
        }));

        return res;
      }
    } catch (error) {
      console.log(`/displayQuestion = ${error}`);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
