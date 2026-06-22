import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5050/api/v1/user/logout",
        {},
        {
          withCredentials: true,
        },
      );

      setUser(null);
      alert("Logout Successfully");
      navigate("/login");
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">
            <span className="text-blue-600">Blog</span>
            <span className="text-slate-900">Sphere</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className="font-medium text-slate-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/blogs"
            className="font-medium text-slate-700 hover:text-blue-600 transition"
          >
            Blogs
          </Link>

          <Link
            to="/about"
            className="font-medium text-slate-700 hover:text-blue-600 transition"
          >
            About
          </Link>

          <Link
            to="/createblog"
            className="font-medium text-slate-700 hover:text-blue-600 transition"
          >
            Create Blog
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {user && (
            <Link
              to="/profile"
              className="text-4xl text-blue-600 hover:text-blue-700 transition"
            >
              <CgProfile />
            </Link>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="text-3xl text-blue-600"
          >
            <CgProfile />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-slate-800"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-white z-40 overflow-y-auto transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-slate-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/blogs"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-slate-700 hover:text-blue-600"
          >
            Blogs
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-slate-700 hover:text-blue-600"
          >
            About
          </Link>

          <Link
            to="/createblog"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-slate-700 hover:text-blue-600"
          >
            Create Blog
          </Link>

          <div className="border-t pt-6">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block text-center py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
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
