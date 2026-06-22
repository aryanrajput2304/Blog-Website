import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthContext";

export default function Profile() {
  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5050/api/v1/user/profile",
          {
            withCredentials: true,
          },
        );

        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5050/api/v1/user/delete/${user._id}`,
        {
          withCredentials: true,
        },
      );
      setUser(null);
      alert("Account deleted successfully");

      navigate("/register");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to delete account");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Cover */}
        <div className="h-40 bg-gradient-to-r from-blue-600 to-purple-600"></div>

        {/* Content */}
        <div className="relative px-8 pb-8">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="-mt-16 w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white">
              <span className="text-5xl font-bold text-blue-600">
                {user.name?.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>

          {/* User Info */}
          <div className="text-center mt-4">
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>

            <p className="text-gray-500">{user.email}</p>
          </div>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-50 p-6 rounded-2xl shadow">
              <h2 className="text-sm text-gray-500 mb-2">User ID</h2>

              <p className="font-semibold text-gray-800 break-all">
                {user._id}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow">
              <h2 className="text-sm text-gray-500 mb-2">Email Address</h2>

              <p className="font-semibold text-gray-800">{user.email}</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow">
              <h2 className="text-sm text-gray-500 mb-2">Account Type</h2>

              <p className="font-semibold text-gray-800">
                {user.authType === "google"
                  ? "Google Account"
                  : "Email & Password"}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow">
              <h2 className="text-sm text-gray-500 mb-2">Member Since</h2>

              <p className="font-semibold text-gray-800">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Edit Profile
            </button>

            <button
              onClick={handleDeleteAccount}
              className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
