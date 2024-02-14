import express from "express";
import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";
import { signIn, signUp } from "../auth/authController.js";

const router = express.Router();

//users/signup
router.post("/signup", signUp);

//users/signin
router.get("/login", signIn);

export default router;
