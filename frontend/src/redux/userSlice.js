import { createSlice } from "@reduxjs/toolkit";
import { signupUser } from "./auth/signupUser";

const initialState = {
  email: "",
  password: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.email = payload.email;
        state.password = payload.password;
        state.isLoading = false;
        state.isSuccess = true;
        return state;
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = payload.message;
      })
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const userSelector = (state) => state.user;
