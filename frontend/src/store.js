import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./redux/userSlice";
import { questionSlice } from "./redux/questionSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    question: questionSlice.reducer,
  },
});

export default store;
