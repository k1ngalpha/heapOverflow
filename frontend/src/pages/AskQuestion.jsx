import QuestionCards from "../components/QuestionCards";
import WritingGoodQuestion from "../components/WritingGoodQuestion";

const AskQuestion = () => {
  return (
    <div className="p-3">
      <div className="mb-4">
        <h1 className="font-bold h-2">Ask a public question</h1>
      </div>
      <WritingGoodQuestion />
      <QuestionCards />
    </div>
  );
};

export default AskQuestion;
