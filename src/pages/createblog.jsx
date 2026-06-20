import React, { useState } from "react";
import axios from "axios";

export default function CreateBlog() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
  });

  const [mainImage, setMainImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!mainImage) {
        alert("Please upload an image");
        return;
      }
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("User not logged in");
        return;
      }
      const userId = user._id;

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("author", userId);
      data.append("mainImage", mainImage);

      const res = await axios.post(
        "http://localhost:5050/api/v1/blog/add",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      alert("Blog created successfully");

      setFormData({
        title: "",
        description: "",
        author: "",
      });

      setMainImage(null);

      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to create blog");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-10">
        <h1 className="text-4xl font-bold text-center mb-8">Create New Blog</h1>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-5">
            <label className="block font-semibold mb-2">Blog Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full border p-4 rounded-xl"
            />
          </div>
          {/* Main Image */}
          <div className="mb-5">
            <label className="block font-semibold mb-2">
              Upload Main Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                console.log("Selected File:", e.target.files[0]);
                setMainImage(e.target.files[0]);
              }}
              className="w-full border p-4 rounded-xl"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Blog Content</label>

            <textarea
              rows="8"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write your blog..."
              className="w-full border p-4 rounded-xl"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
}
