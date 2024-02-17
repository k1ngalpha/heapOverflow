import express from "express";
import { verifyToken } from "../auth/verifyToken.js";
import {
  addQuestions,
  displayAllQuestions,
} from "../middleware/questionsController.js";
const router = express.Router();

//question/ask;
//router.post("/ask", verifyToken, addQuestions);
//questions/:id
//router.get("/:id/", displayQuestions);
router.get("/", displayAllQuestions);
router.post("/questions/ask", verifyToken, addQuestions);
export default router;
