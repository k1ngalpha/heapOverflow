import { createSlice } from "@reduxjs/toolkit";
import {
  addQuestions,
  displayAllQuestions,
  displayQuestionById,
} from "../controller/questionsController";

const initialState = {
  questions: [],
  questionById: null,
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
        state.errorMessage = payload;
      })
      ///
      .addCase(displayAllQuestions.fulfilled, (state, { payload }) => {
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
      })
      ///
      .addCase(displayQuestionById.fulfilled, (state, { payload }) => {
        state.questionById = payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(displayQuestionById.pending, (state) => {
        state.isError = true;
      })
      .addCase(displayQuestionById.rejected, (state, { payload }) => {
        state.isError = true;
        state.isLoading = false;
        state.errorMessage = payload;
      });
  },
});

export const questionSelector = (state) => state.question;
