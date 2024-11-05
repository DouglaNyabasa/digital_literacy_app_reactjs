import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../navbar/assets/assets";

const Navbar = ({ setShowLogin }) => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-transparent">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img src={assets.logo} alt="" className="logo" />
            </Link>
            <br />
            {/* <h1 className="text-black-600  ">Digital Literacy School</h1>  */}
          </div>
          <ul className="hidden lg:flex ml-8 space-x-8 text-slate-gray">
            <li>
              <Link
                to="/"
                className="hover:text-orange-700 transition duration-200 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-orange-700 transition duration-200 ease-in-out"
              >
                All Courses
              </Link>
            </li>
            <li>
              <Link
                to="/chatbot"
                className="hover:text-orange-700 transition duration-200 ease-in-out"
              >
                Learn with AI
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="hover:text-orange-700 transition duration-200 ease-in-out"
              >
                News & Updates
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-700 transition duration-200 ease-in-out"
              >
                About Us
              </Link>
            </li>
          </ul>
          <div className=" ml-6 hidden lg:flex justify-center space-x-12 items-center text-slate-gray">
            <a
              className="py-2 px-3 border rounded-md text-gray-700 hover:bg-orange-700 hover:text-white transition duration-200 ease-in-out cursor-pointer"
              onClick={() => setShowLogin(true)}
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
