import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import addQuestion from "../src/routes/questionRoutes.js";
import userRoute from "../src/routes/userRoute.js";
import { verifyToken } from "./auth/verifyToken.js";
import cookieParser from "cookie-parser";

//.env config
dotenv.config();

//Connect to DB
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to DB"));

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/users", userRoute);
app.use("/questions", addQuestion);

app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
