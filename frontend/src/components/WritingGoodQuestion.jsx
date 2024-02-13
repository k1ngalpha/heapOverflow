const WritingGoodQuestion = () => {
  return (
    <div className="container bg-blue-200 border-blue-300 rounded-md p-2">
      <h1 className="font-semibold">Writing a good question</h1>
      <p>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process. Looking to ask a non-programming
        question? See the topics here to find a relevant site.
      </p>
      <h5 className="font-semibold">Steps</h5>
      <ol>
        <li>Summarize your problem in a one-line title.</li>
        <li>Describe your problem in more detail.</li>
        <li>Describe what you tried and what you expected to happen.</li>
        <li>
          Add “tags” which help surface your question to members of the
          community.
        </li>
        <li>Review your question and post it to the site.</li>
      </ol>
    </div>
  );
};

export default WritingGoodQuestion;
