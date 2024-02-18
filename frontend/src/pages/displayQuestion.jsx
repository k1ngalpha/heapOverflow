import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { displayAllQuestions } from "../controller/questionsController";
import { questionSelector } from "../redux/questionSlice";
import { Link } from "react-router-dom";

const DisplayQuestions = () => {
  const [data, setData] = useState([]);
  const { questions, isSuccess } = useSelector(questionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayAllQuestions());
  }, [dispatch]);
  return (
    <div className="bg-red-500 p-2 gap-2 mt-2">
      {isSuccess ? (
        <div>
          {questions.map((data) => (
            <>
              <Link
                to={`/questions/${data._id}/${data.title}`}
                key={data._id}
                className="font-semibold text-2xl"
              >
                {data.title}
              </Link>
              {/* <p>{data.body}</p> */}

              <div className="bg-pink-600 flex  gap-1">
                {data.tags.map((tags, index) => (
                  <div
                    key={index}
                    className="bg-blue-300 text-blue-800 p-2 rounded-md gap-2"
                  >
                    {tags}
                  </div>
                ))}
              </div>
              <hr className="p-2 mt-2" />
            </>
          ))}
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default DisplayQuestions;
