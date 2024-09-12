import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown after performing any action
  const handleAction = (action) => {
    console.log(`${action} button clicked!`);
    
    if (action === "Profile") {
      console.log("Redirecting to profile...");
    } else if (action === "Settings") {
      console.log("Opening settings...");
    } else if (action === "Logout") {
      console.log("Logging out...");
    }

    // Close the dropdown after action
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-orange-400 p-4 text-white flex justify-between items-center shadow-md">
      {/* Title */}
      <div className="text-lg font-semibold">Analytics Dashboard</div>

      {/* Search and User Section */}
      <div className="flex items-center space-x-4 hover:scale-95 ">
        {/* Search Bar */}
        <div className="hidden relative flex-1 lg:block ">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 " />
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 bg-black text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
          />
        </div>

        {/* Profile Section */}
        <div className="relative" ref={dropdownRef}>
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
          <div
            className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-800 transform transition-transform duration-700 ease-out origin-top-right ${
              isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
