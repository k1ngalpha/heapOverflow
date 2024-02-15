import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addQuestions } from "../functions/addQuestions";
import { useDispatch } from "react-redux";

const ReviewQuestion = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const { title, problemDetails, expectations, tags } = location.state;
  const dispatch = useDispatch();
  const formSubmit = (data) => {
    dispatch(addQuestions(data));
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="p-2">
        <div className="bg-blue-400 mt-2 shadow-lg border rounded-md container p-2">
          <h2 className="font-bold">Title</h2>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
          <textarea
            name="title"
            readOnly
            defaultValue={title}
            {...register("title")}
            className="rounded-md shadow-md mt-2 border h-10 w-full"
          />
        </div>
        <div className="bg-blue-400 mt-2 shadow-lg border rounded-md container p-2">
          <h2 className="font-bold">Body</h2>
          <p>
            The body of your question contains your problem details and results.
            Minimum 220 characters.
          </p>
          <textarea
            name="body"
            {...register("body")}
            defaultValue={`${problemDetails}. ${expectations}`}
            className="rounded-md shadow-md mt-2 border h-60 w-full"
          />
        </div>
        <div className="bg-blue-400 mt-2 shadow-lg border rounded-md container p-2">
          <h2 className="font-bold">Tags</h2>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
          <textarea
            name="tags"
            {...register("tags")}
            readOnly
            defaultValue={tags}
            className="rounded-md shadow-md mt-2 border h-10 w-full"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-400 p-2 text-white rounded-md mt-3">
          Post your question
        </button>
      </div>
    </form>
  );
};

export default ReviewQuestion;
