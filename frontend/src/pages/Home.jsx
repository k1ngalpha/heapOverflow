import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-2 flex gap-2 bg-red-400">
      <div className="bg-green-500 flex items-center justify-between w-full">
        <h1 className="font-semibold">Top Questions</h1>
        <Link
          to="/questions/ask"
          className="bg-blue-500 p-2 text-white rounded-md"
        >
          Ask Question
        </Link>
      </div>
    </div>
  );
};
export default Home;
