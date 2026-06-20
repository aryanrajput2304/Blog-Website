import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function BlogDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [blog, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:5050/api/v1/blog/getblog/${id}`,
        );
        setBlogs(res.data.blog);
      } catch (error) {
        console.log("Error in fetching blogs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[500px] overflow-hidden">
        <img
          src={blog.mainImage?.url}
          alt={blog.title}
          className="w-full h-full "
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Blog Article
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-5 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 bg-black text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition"
        >
          ← Back
        </button>

        {/* Author Card */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 mb-10 flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg">{blog.author?.name}</h3>

            <p className="text-slate-500">Author</p>
          </div>

          <div>
            <p className="text-slate-500">Published</p>

            <p className="font-medium">
              {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <article className="bg-white rounded-2xl shadow-sm border p-8 md:p-10">
          <p className="text-lg text-slate-700 leading-9 whitespace-pre-line">
            {blog.description}
          </p>
        </article>

        {/* Author Bio */}
        <div className="mt-10 bg-white rounded-2xl shadow-sm border p-6">
          <h3 className="font-bold text-xl mb-2">About Author</h3>

          <p className="text-slate-600">Written by {blog.author?.name}</p>
        </div>
      </div>
    </div>
  );
}
