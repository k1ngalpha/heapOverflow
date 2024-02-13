//users/signup

import { Link } from "react-router-dom";

const Login = () => {
  return (
    // <div className="flex justify-end p-2 mt-4 mr-4 bg-green-300">
    <div className="flex justify-center p-4 mt-24 mr-4 bg-green-300">
      {/* <div className="container bg-red-400 max-w-sm px-6 py-4 rounded-md shadow-md border"> */}
      <div className="container bg-red-400 max-w-sm px-6 py-4 rounded-md shadow-md border">
        <div className="space-y-2">
          <h2 className="font-bold">Email</h2>
          <input type="email" className="border rounded-md p-1 w-full" />
          <h2 className="font-bold">Password</h2>
          <input type="password" className="border rounded-md p-1 w-full" />
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
  );
};

export default Login;
