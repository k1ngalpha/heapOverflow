//users/signup

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/auth/loginUser";
import { useEffect } from "react";
import { userSelector } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { isSuccess, isError, isLoading, errorMessage } =
    useSelector(userSelector);
  const dispatch = useDispatch();
  const formSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (isSuccess) {
      alert("login successful");
      navigate("/");
    }
  });

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="flex justify-center items-center h-screen bg-green-300">
        {/* <div className="flex justify-center p-4 mt-24 mr-4 bg-green-300"> */}
        {/* <div className="container bg-red-400 max-w-sm px-6 py-4 rounded-md shadow-md border"> */}
        <div className="container bg-red-400 h-70 max-w-80 px-6 py-4 rounded-md shadow-md border">
          <div className="space-y-2">
            <h2 className="font-bold">Email</h2>
            <input
              {...register("email")}
              type="email"
              className="border rounded-md p-1 w-full"
            />
            <h2 className="font-bold">Password</h2>
            <input
              {...register("password")}
              type="password"
              className="border rounded-md p-1 w-full"
            />
            <div className="mt-2 py-2 space-x-2">
              <button className="border text-white bg-blue-500 rounded-md p-2 w-full">
                Login
              </button>

              <span className="mt-4">Don’t have an account?</span>
              <Link to="/users/signup" className="text-blue-600">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
