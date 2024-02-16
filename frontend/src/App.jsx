import AskQuestion from "./pages/AskQuestion";
import Layout from "./pages/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ReviewQuestion from "./components/ReviewQuestion";

import { useSelector } from "react-redux";
import { userSelector } from "../src/redux/userSlice";

function App() {
  const { isSuccess, isError, isLoading, errorMessage } =
    useSelector(userSelector);
  return (
    <>
      <Layout />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {isSuccess && (
            <>
              <Route path="/questions/ask" element={<AskQuestion />} />
              <Route
                path="/questions/ask/review"
                element={<ReviewQuestion />}
              />
            </>
          )}
          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
