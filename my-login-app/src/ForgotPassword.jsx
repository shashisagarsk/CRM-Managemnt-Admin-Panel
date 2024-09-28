import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle forgot password logic here (e.g., sending reset link to email)
    alert("A password reset link has been sent to your email.");
    navigate('/'); // Navigate back to login after handling the reset logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-peach-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img src="/logo.png" alt="OM Funding Gurus Logo" className="w-20 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Forgot Password</h2>
          <p className="text-sm text-center text-gray-500 mt-2">
            Enter your email address to receive a password reset link.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-semibold text-gray-600" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="py-2 px-6 text-white bg-orange-500 rounded hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-orange-500 hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
