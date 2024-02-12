import express from "express";
import Question from "../models/questionModel.js";
const router = express.Router();

//api/question;
router.post("/question", async (req, res) => {
  const { title, question } = req.body;
  try {
    await Question.create({
      title: title,
      question: question,
    });
    res.status(200).json({ message: "Question saved successfully" });
  } catch (error) {
    res.status(400).json({ message: "Cannot save the question" });
    console.log(`/api/router - ${error}`);
  }
});

export default router;
