import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiMessageSquare,
  FiBarChart,
  FiDollarSign,
  FiMenu,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  
  };

  return (
    <>
      {/* Toggle Button */}
      <div
        className={`fixed top-4 left-5 z-30 bg-slate-900 text-white p-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out ${
          isOpen ? "ml-52" : ""
        }`}
        onClick={toggleSidebar}
      >
        {isOpen ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
      </div>

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-screen bg-blue-900 text-white p-4 space-y-6 z-20 transform ${
          isOpen ? "translate-x-0 w-64" : "translate-x-0 w-16"
        } transition-all duration-500 ease-in-out shadow-lg`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mt-10">
          {isOpen && (
            <div className="flex items-center space-x-2">
              <img
                src="src/assets/omfg-logo-black.png"
                alt="Logo"
              />
            </div>
          )}
        </div>
        {/* Sidebar Links */}
        <ul className="space-y-4 mt-8">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded-md"
            >
              <FiHome className="text-xl" />
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? "inline-block" : "hidden"
                }`}
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/tasks"
              className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded-md"
            >
              <FiMessageSquare className="text-xl" />
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? "inline-block" : "hidden"
                }`}
              >
                Tasks
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/analytics"
              className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded-md"
            >
              <FiBarChart className="text-xl" />
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? "inline-block" : "hidden"
                }`}
              >
                Analytics
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/payments"
              className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded-md"
            >
              <FiDollarSign className="text-xl" />
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? "inline-block" : "hidden"
                }`}
              >
                Payments
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content area adjustment */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "ml-52" : "ml-4"
        } p-6`}
      >
        {/* Your main content goes here */}
       
      </div>
    </>
  );
};

export default Sidebar;
