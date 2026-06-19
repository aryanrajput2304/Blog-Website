import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Top Border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Responsive Grid: Stacks vertically on mobile, splits into 2 columns on tablet, 3 columns on desktops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
              <span className="text-blue-500">Blog</span>
              Sphere
            </h2>

            <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 max-w-md">
              Share your stories, ideas, and experiences with the world. Read
              amazing blogs and connect with passionate writers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-100">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2.5 sm:gap-3 text-gray-400 text-sm sm:text-base">
              <Link
                to="/"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </Link>

              <Link
                to="/blogs"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Blogs
              </Link>

              <Link
                to="/about"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                About
              </Link>

              <Link
                to="/login"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-100">
              Connect With Us
            </h3>

            <div className="flex gap-5 text-2xl">
              <a
                href="#"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-xs sm:text-sm text-gray-500">
          © 2026 BlogSphere. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
