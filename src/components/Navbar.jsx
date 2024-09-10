import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown after performing any action
  const handleAction = (action) => {
    console.log(`${action} button clicked!`);
    
    // You can add your specific actions here
    if (action === "Profile") {
      // Navigate to the profile page or perform profile-related tasks
      console.log("Redirecting to profile...");
    } else if (action === "Settings") {
      // Navigate to the settings page or perform settings-related tasks
      console.log("Opening settings...");
    } else if (action === "Logout") {
      // Perform logout, clear session, etc.
      console.log("Logging out...");
      // Example: window.location.href = "/login"; // Redirect to login page
    }

    // Close the dropdown after action
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-orange-400 p-4 text-white flex justify-between items-center shadow-md">
      {/* Title */}
      <div className="text-lg font-semibold">Analytics Dashboard</div>

      {/* Search and User Section */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 bg-white text-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="text-xl text-gray-400 ml-2" />
        </div>

        {/* Profile Section */}
        <div className="relative">
          {/* Profile Image */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="text-sm hidden md:block">Hi, User</span>
            <img
              src="src/assets/user.png"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-800">
              <div className="px-4 py-2">
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-500">john.doe@example.com</p>
              </div>
              <hr />
              <div className="px-4 py-2">
                <button
                  onClick={() => handleAction("Profile")}
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Profile
                </button>
              </div>
              <div className="px-4 py-2">
                <button
                  onClick={() => handleAction("Settings")}
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Settings
                </button>
              </div>
              <div className="px-4 py-2">
                <button
                  onClick={() => handleAction("Logout")}
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
