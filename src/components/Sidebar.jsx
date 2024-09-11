import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiMessageSquare,
  FiBarChart,
  FiDollarSign,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Toggle Button (Menu icon) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-2 z-30 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
       
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-6 space-y-6 z-20 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-1000 ease-in-out shadow-lg`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center">
          <div className="text-3xl">
            
            <img 
              src="src/assets/omfg-logo-black.png"
              alt="LOGO"
              className="h-8"
            />
          </div>

          
        </div>

        {/* Sidebar Links */}
        
        <ul className="space-y-4">
          <li>
            <Link
              to="/Dashboard"
              className="flex items-center space-x-2 p-4 hover:bg-gray-700"
              onClick={toggleSidebar}
            >
              <FiHome />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/tasks"
              className="flex items-center space-x-2 p-4 hover:bg-gray-700"
              onClick={toggleSidebar}
            >
              <FiHome />
              <span>Tasks</span>
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              className="flex items-center space-x-2 p-4 hover:bg-gray-700"
              onClick={toggleSidebar}
            >
              <FiMessageSquare />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link
              to="/analytics"
              className="flex items-center space-x-2 p-4 hover:bg-gray-700"
              onClick={toggleSidebar}
            >
              <FiBarChart />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              to="/payments"
              className="flex items-center space-x-2 p-4 hover:bg-gray-700"
              onClick={toggleSidebar}
            >
              <FiDollarSign />
              <span>Payments</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Background Overlay for mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-700"
        ></div>
      )}

      {/* Main content area (adjust padding when sidebar is open) */}
      <div
        className={`transition-all duration-1000 ease-in-out ${
          isOpen && "ml-52"
        } p-6`}
      >
       
      </div>
    </>
  );
};

export default Sidebar;
