import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className=" p-4 fixed w-full top-0 z-50 bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" text-xl font-bold">Landmarks</div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="">
              Home
            </Link>
            <Link to="/profile" className="">
              Profile
            </Link>
            <Link to="/landmark/5" className="">
              Landmark
            </Link>
            <Link to="/login" className="">
              Login/Register
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className=" focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <Link to="/" className="block  py-1">
              Home
            </Link>
            <Link to="/profile" className="block  py-1">
              Profile
            </Link>
            <Link to="/landmark/5" className="block  py-1">
              Landmark
            </Link>
            <Link to="/login" className="block  py-1">
              Login/Register
            </Link>
          </div>
        )}
      </nav>

      {/* Main content */}
      <div className="flex-grow pt-16 px-2">{children}</div>

      {/* Footer */}
      <footer className=" p-4 mt-auto">
        <div className="container mx-auto text-center bg-white">
          &copy; 2024 Developed by Tula Gbolaga. All rights reserved.
        </div>
      </footer>
    </div>
    // <div className="px-4 relative">
    //   <div className="flex justify-between p-3 fixed top-0 left-0 w-full bg-white shadow-md z-10 ">
    //     <div>
    //       <p className="text-[20px] font-bold">Landmarks</p>
    //     </div>
    //     <div>
    //       <Link to="/">Home | </Link>
    //       <Link to="/profile">Profile | </Link>
    //       <Link to="/landmark/5">Landmark | </Link>
    //       <Link to="/login">Login/Register</Link>
    //     </div>
    //   </div>
    //   <div className="mb-[100px]"></div>
    //   {children}
    // </div>
  );
};
export { Navbar };
