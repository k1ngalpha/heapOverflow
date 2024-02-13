//users/signup

const SignUp = () => {
  return (
    // <div className="flex justify-end p-2 mt-4 mr-4 bg-green-300">
    <div className="flex justify-center p-2 mt-4 mr-4 bg-green-300">
      {/* <div className="container bg-red-400 max-w-sm px-6 py-4 rounded-md shadow-md border"> */}
      <div className="container bg-red-400 max-w-sm px-6 py-4 rounded-md shadow-md border">
        <h1 className="font-bold mb-1">Create your account</h1>

        <p className="mb-2 text-sm">
          By clicking “Sign up”, you agree to our terms of service and
          acknowledge you have read our privacy policy.
        </p>
        <div className="space-y-2">
          <h2 className="font-bold">Email</h2>
          <input type="email" className="border rounded-md p-1 w-full" />
          <h2 className="font-bold">Password</h2>
          <input type="password" className="border rounded-md p-1 w-full" />
          <div className="mt-2 py-2 space-x-2">
            <button className="border text-white bg-blue-500 hover:bg-blue-400 rounded-md p-2 w-full">
              Sign up
            </button>
            <div className="mt-2">
              <p className="text-sm">
                Must contain 8+ characters, including at least 1 letter and 1
                number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
