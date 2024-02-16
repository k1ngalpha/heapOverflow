import express from "express";
import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";
import { signIn, signOut, signUp } from "../auth/authController.js";

const router = express.Router();

//users/signup
router.post("/signup", signUp);

//users/signin
router.post("/login", signIn);

//users/signout
router.get("/signout", signOut);

export default router;
