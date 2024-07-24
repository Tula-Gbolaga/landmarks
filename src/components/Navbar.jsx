import { Link } from "react-router-dom";
const Navbar = ({ children }) => {
  return (
    <div className="px-4 relative">
      <div className="flex justify-between p-3 fixed top-0 left-0 w-full bg-white shadow-md z-10 ">
        <div>
          <p className="text-[20px] font-bold">Landmarks</p>
        </div>
        <div>
          <Link to="/">Home | </Link>
          <Link to="/profile">Profile | </Link>
          <Link to="/landmark/5">Landmark | </Link>
          <Link to="/login">Login/Register</Link>
        </div>
      </div>
      <div className="mb-[100px]"></div>
      {children}
    </div>
  );
};
export { Navbar };
