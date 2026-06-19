import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logout Successfully");
    navigate("/login");
    setIsOpen(false);
  };

  return (
    // Changed bg-transparent absolute to sticky top-0 with semi-transparent background + blur effect
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/30 shadow-sm transition-all duration-300">
      {/* Container with responsive padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-slate-900">
            <span className="text-blue-600">Blog</span>
            <span>Sphere</span>
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          <Link
            to="/"
            className="font-medium hover:border-b-4 hover:border-blue-600 text-slate-700 hover:text-blue-600 transition-all "
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="font-medium hover:border-b-4 hover:border-blue-600 text-slate-700 hover:text-blue-600 transition-all "
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className="font-medium hover:border-b-4 hover:border-blue-600 text-slate-700 hover:text-blue-600 transition-all "
          >
            About
          </Link>
          <Link
            to="/contact"
            className="font-medium hover:border-b-4 hover:border-blue-600 text-slate-700 hover:text-blue-600 transition-all "
          >
            Contact
          </Link>
          <Link
            to="/createblog"
            className="font-medium hover:border-b-4 hover:border-blue-600 text-slate-700 hover:text-blue-600 transition-all"
          >
            CreateBlog
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            to="/profile"
            className="text-3xl md:text-4xl flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <CgProfile />
          </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 text-sm md:text-base font-medium"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 border-2 border-blue-600 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 text-sm md:text-base"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile & Tablet Toggle Hamburger Button */}
        <div className="flex lg:hidden items-center gap-4">
          {/* Quick Profile shortcut for mobile view */}
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="text-3xl text-blue-600 sm:hidden"
          >
            <CgProfile />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-slate-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay and Links */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 border-t border-slate-100">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-lg text-slate-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-lg text-slate-700 hover:text-blue-600"
          >
            Blogs
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-lg text-slate-700 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-lg text-slate-700 hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            to="/createblog"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-lg text-slate-700 hover:text-blue-600"
          >
            CreateBlog
          </Link>

          {/* Mobile Auth actions panel inside drawer */}
          <div className="sm:hidden pt-4 border-t border-slate-100 flex flex-col gap-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full text-center px-5 py-2.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-5 py-2.5 border-2 border-blue-600 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-all"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
