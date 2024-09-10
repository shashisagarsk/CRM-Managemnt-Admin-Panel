import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiMessageSquare, FiBarChart, FiDollarSign, FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden p-4">
        <button onClick={() => setIsOpen(true)} className="focus:outline-none">
          <FiMenu className="text-2xl text-gray-600" />
        </button>
      </div>

      <div
        className={`fixed md:relative top-0 left-0 h-screen bg-gray-800 text-white p-6 space-y-6 z-20 transform  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex justify-between items-center ">
          <div className="text-3xl justify-start ">
            <img className="ml-10" src="src/assets/omfg-logo-black.png" alt="" />
            <h1 className="text-orange-400 font-bold">OM FUNDING GURU </h1>
            
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden focus:outline-none"
          >
            <FiX className="text-2xl text-gray-400" />
          </button>
        </div>

        <ul className="space-y-4">
          <li>
            <Link
              to="/tasks"
              className="flex items-center space-x-2 p-4 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <FiHome />
              <span>Tasks</span>
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              className="flex items-center space-x-2 p-4 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <FiMessageSquare />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link
              to="/analytics"
              className="flex items-center space-x-2 p-4 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <FiBarChart />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              to="/payments"
              className="flex items-center space-x-2 p-4 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <FiDollarSign />
              <span>Payments</span>
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
