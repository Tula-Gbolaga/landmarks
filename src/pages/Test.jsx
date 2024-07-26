import React, { useState } from "react";
import { Link } from "react-router-dom";

const Test = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-blue-600 w-64 p-4`}
      >
        <div className="flex flex-col h-full">
          <div className="text-white text-2xl font-bold mb-6">Dashboard</div>
          <nav className="flex-1">
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white block py-2 px-4 rounded hover:bg-blue-700"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/profile"
                  className="text-white block py-2 px-4 rounded hover:bg-blue-700"
                >
                  Profile
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/settings"
                  className="text-white block py-2 px-4 rounded hover:bg-blue-700"
                >
                  Settings
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/analytics"
                  className="text-white block py-2 px-4 rounded hover:bg-blue-700"
                >
                  Analytics
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <button onClick={toggleSidebar} className="text-white md:hidden">
              Close Sidebar
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white p-4 shadow-md md:justify-end">
          <button onClick={toggleSidebar} className="text-blue-600 md:hidden">
            Open Sidebar
          </button>
          <div className="text-xl font-bold text-gray-700">
            Dashboard Header
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>Your main content goes here.</p>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          &copy; 2024 Your Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export { Test };
