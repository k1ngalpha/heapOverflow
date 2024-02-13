import express from "express";
import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";
import { signIn, signUp } from "../auth/authController.js";

const router = express.Router();

//api/user/auth/sign-up
router.post("/auth/sign-up", signUp);

//api/user/auth/sign-in
router.get("/auth/sign-in", signIn);

export default router;
