

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-peach-100">
      <div className="w-full max-w-md  space-y-2 ">
        <div className="flex flex-col items-center">
          <img src="src/assets/omfg-logo-black.png" alt="OM Funding Gurus Logo" className="" />
        </div>
          <h2 className="text-2xl font-bold text-gray-800">LOGIN</h2>
          <p className="text-sm text-gray-500">Please Login to your account</p>

        <form className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-semibold text-gray-600" htmlFor="email"></label>
            <input
              type="email"
              id="email"
              className="w-full p-2 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              placeholder="Email/Username"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-sm font-semibold text-gray-600" htmlFor="password"></label>
            <input
              type="password"
              id="password"
              className="w-full p-2 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Login
          </button>
          <div className="flex items-center justify-end">
            <a href="#" className="text-sm text-orange-500 hover:underline">Forgot Password?</a>
          </div>

        </form>

        <p className="mt-4 text-sm text-start text-gray-600">
          New User? <a href="#" className="text-orange-500 hover:underline">Signup</a>
        </p>

        <footer className="mt-8 text-xs text-center text-gray-500">
          © 2024 | OM FUNDING GURUS Designed by DO IT FOR ME LLC | All Rights Reserved OM FUNDING GURUS
        </footer>
      </div>
    </div>
  );
};

export default Login;
