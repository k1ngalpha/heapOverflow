import express from "express";
import { addQuestions } from "../middleware/addQuestions.js";
const router = express.Router();

//api/question;
router.post("/ask", addQuestions);

export default router;
