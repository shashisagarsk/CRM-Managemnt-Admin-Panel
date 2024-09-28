import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TwoFactorAuth = () => {
  const [timer, setTimer] = useState(120); // Main timer set to 2 minutes
  const [resendTimer, setResendTimer] = useState(0); // Resend button becomes active after 0 seconds
  const navigate = useNavigate(); // Use the navigate hook

  // Countdown logic for the main verification timer
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  // Countdown logic for resend timer
  useEffect(() => {
    if (resendTimer > 0) {
      const countdown = setInterval(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [resendTimer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle the resend functionality
  const handleResend = () => {
    // Simulate sending OTP logic here
    alert("OTP has been resent to your email!");

    // Reset the main timer and resend timer
    setTimer(120); // Reset main verification timer to 2 minutes
    setResendTimer(30); // Disable the resend button for 30 seconds again
  };

  // Navigate back to the login page
  const handleBackToLogin = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-peach-100">
      <div className="w-full max-w-md p-8 space-y-2 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img src="src/assets/omfg-logo-black.png" alt="OM Funding Gurus Logo" className="w-56" />
          <h2 className="text-2xl font-bold text-gray-800">TWO FACTOR AUTHENTICATION</h2>
          <p className="text-sm text-center text-gray-500 mt-2">
            A verification code has been sent to your Email. This code will be valid for 2 minutes ({formatTime(timer)})
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            className="w-full p-2 text-center text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="Enter Verification Code"
            maxLength={6}
            required
          />

          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={handleBackToLogin}
              className="text-sm text-orange-500 hover:underline"
            >
              Back to Login
            </button>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className={`py-2 px-6 text-white bg-orange-400 rounded ${resendTimer > 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-500'}`}
              disabled={resendTimer > 0}
              onClick={handleResend}
            >
              Re-Send ({resendTimer > 0 ? resendTimer : 'Resend'})
            </button>

            <button
              type="submit"
              className="py-2 px-6 text-white bg-orange-500 rounded hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
