const QuestionCards = () => {
  return (
    <>
      <div className="bg-blue-400 mt-2 shadow-lg border rounded-md container p-2">
        <h2 className="font-bold">Title</h2>
        <p>
          Be specific and imagine you’re asking a question to another person.
        </p>
        <textarea className="rounded-md shadow-md mt-2 border h-60 w-full"></textarea>
      </div>

      <div className="bg-blue-400 mt-2 shadow-lg border rounded-md container p-2">
        <h2 className="font-bold">What are the details of your problem?</h2>
        <p>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </p>
        <textarea className="rounded-md shadow-md mt-2 border h-60 w-full"></textarea>
      </div>

      <div className="bg-blue-400 mt-2 shadow-lg border rounded-md container p-2">
        <h2 className="font-bold">
          What did you try and what were you expecting?
        </h2>
        <p>
          Describe what you tried, what you expected to happen, and what
          actually resulted. Minimum 20 characters.
        </p>
        <textarea className="rounded-md shadow-md mt-2 border h-60 w-full"></textarea>
      </div>

      <div className="bg-blue-400 mt-2 shadow-lg border rounded-md container p-2">
        <h2 className="font-bold">Tags</h2>
        <p>
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </p>
        <textarea className="rounded-md shadow-md mt-2 border h-60 w-full"></textarea>
      </div>
      <button className="bg-blue-500 p-2 text-white rounded-md mt-3">
        Review your question
      </button>
    </>
  );
};

export default QuestionCards;
