import AskQuestion from "./pages/AskQuestion";
import Layout from "./pages/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layout />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions/ask" element={<AskQuestion />} />
          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/users/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
