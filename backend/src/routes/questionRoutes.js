import express from "express";
import { addQuestions } from "../middleware/addQuestions.js";
import { verifyToken } from "../auth/verifyToken.js";
const router = express.Router();

//api/question;
router.post("/ask", verifyToken, addQuestions);

export default router;
