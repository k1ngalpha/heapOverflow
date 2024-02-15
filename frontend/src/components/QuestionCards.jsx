import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const QuestionCards = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const formSubmit = (data) => {
    const { title, problemDetails, expectations, tags } = data;
    navigate("/questions/ask/review", {
      state: { title, problemDetails, expectations, tags },
    });
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="bg-blue-400 mt-2 shadow-lg border rounded-md container p-2">
        <h2 className="font-bold">Title</h2>
        <p>
          Be specific and imagine you’re asking a question to another person.
        </p>
        <textarea
          name="title"
          {...register("title")}
          className="rounded-md shadow-md mt-2 border h-60 w-full"
        />
      </div>

      <div className="bg-blue-400 mt-2 shadow-lg border rounded-md container p-2">
        <h2 className="font-bold">What are the details of your problem?</h2>
        <p>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </p>
        <textarea
          name="problemDetails"
          {...register("problemDetails")}
          className="rounded-md shadow-md mt-2 border h-60 w-full"
        />
      </div>

      <div className="bg-blue-400 mt-2 shadow-lg border rounded-md container p-2">
        <h2 className="font-bold">
          What did you try and what were you expecting?
        </h2>
        <p>
          Describe what you tried, what you expected to happen, and what
          actually resulted. Minimum 20 characters.
        </p>
        <textarea
          name="expectations"
          {...register("expectations")}
          className="rounded-md shadow-md mt-2 border h-60 w-full"
        />
      </div>

      <div className="bg-blue-400 mt-2 shadow-lg border rounded-md container p-2">
        <h2 className="font-bold">Tags</h2>
        <p>
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </p>
        <textarea
          name="tags"
          {...register("tags")}
          className="rounded-md shadow-md mt-2 border h-60 w-full"
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-400 p-2 text-white rounded-md mt-3">
        Review your question
      </button>
    </form>
  );
};

export default QuestionCards;
