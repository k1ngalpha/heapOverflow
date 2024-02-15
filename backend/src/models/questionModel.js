import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
