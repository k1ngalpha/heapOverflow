import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displayQuestionById } from "../controller/questionsController";

import { questionSelector } from "../redux/questionSlice";

const QuestionDetail = () => {
  const { id, title } = useParams();
  const { questionById, isSuccess } = useSelector(questionSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayQuestionById({ id, title }));
    console.log(questionById);
  }, [dispatch]);
  return (
    <div className="p-2 bg-red-500">
      <h1 className="text-2xl font-semibold">{questionById.title}</h1>
      <p>{questionById.body}</p>
      <div className="bg-pink-600 flex  gap-1">
        {questionById.tags.map((tags, index) => (
          <div
            key={index}
            className="bg-blue-300 text-blue-800 p-2 rounded-md gap-2"
          >
            {tags}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionDetail;
