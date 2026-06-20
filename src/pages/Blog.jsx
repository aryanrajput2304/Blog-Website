import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5050/api/v1/blog/getblog");

      setBlogs(res.data.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="text-5xl font-bold text-center mb-4">Explore Blogs</h1>

      <p className="text-center text-gray-600 mb-12">
        Discover articles, stories, and insights from our community.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={blog.mainImage?.url}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{blog.title}</h2>
              <p className="text-gray-600 line-clamp-3">{blog.description}</p>
              <Link
                to={`/blog/${blog._id}`}
                className="inline-block px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700 transition"
              >
                Read More
              </Link>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
