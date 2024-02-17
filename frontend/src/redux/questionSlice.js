import { createSlice } from "@reduxjs/toolkit";
import {
  addQuestions,
  displayAllQuestions,
} from "../controller/questionsController";

const initialState = {
  questions: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  isLogin: false,
  errorMessage: "",
};

export const questionSlice = createSlice({
  name: "question",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addQuestions.fulfilled, (state, { payload }) => {
        state.questions.push(payload);
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(addQuestions.pending, (state) => {
        state.isError = true;
      })
      .addCase(addQuestions.rejected, (state, { payload }) => {
        state.isError = true;
        state.isLoading = false;
        state.errorMessage = payload.message;
      })
      ///
      .addCase(displayAllQuestions.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.questions = payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(displayAllQuestions.pending, (state) => {
        state.isError = true;
      })
      .addCase(displayAllQuestions.rejected, (state, { payload }) => {
        state.isError = true;
        state.isLoading = false;
        state.errorMessage = payload;
      });
  },
});

export const questionSelector = (state) => state.question;
