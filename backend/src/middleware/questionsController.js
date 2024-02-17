import Question from "../models/questionModel.js";

//Add question
export const addQuestions = async (req, res) => {
  const { title, body, tags } = req.body;
  try {
    await Question.create({
      title: title,
      body: body,
      tags: tags,
    });
    res.status(200).json({ message: "Question saved successfully" });
  } catch (error) {
    res.status(400).json({ message: "Cannot save the question" });
    console.log(`/questions/ask - ${error}`);
  }
};

//Display all questions
export const displayAllQuestions = async (req, res) => {
  try {
    const question = await Question.find();
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: "Error fetching question" });
  }
};
