import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RecentBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getRecentBlogs();
  }, []);

  const getRecentBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5050/api/v1/blog/getblog");
      // Latest 5 blogs
      const latestBlogs = res.data.blogs.slice(0, 5);
      setBlogs(latestBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Changed hard sky background to a softer, elegant radial gradient
    <div className="bg-gradient-to-b from-sky-100 via-sky-50 to-white w-full relative overflow-hidden">
      {/* Decorative background blobs for a modern tech/creative vibe */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

      <section className="px-4 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-32 max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-row justify-between items-end mb-10 sm:mb-14 border-b border-slate-200/60 pb-4">
          <div>
            <span className="text-blue-600 font-bold tracking-wider text-xs uppercase block mb-1">
              Stay Updated
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Recent Stories
            </h2>
          </div>

          <button className="text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group transition-colors duration-200 whitespace-nowrap bg-blue-50 hover:bg-blue-100/80 px-4 py-2 rounded-xl">
            View All
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="group bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Container with smooth Zoom Effect */}
              <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden bg-slate-100 shrink-0 relative">
                {/* Optional category tag - can fallback to standard label */}
                <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  Trending
                </span>

                <img
                  src={blog.mainImage?.url}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Sleek subtle overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
              </div>

              {/* Card Contents */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  {/* Clean Typography Hierarchy */}
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-slate-500 text-sm sm:text-base line-clamp-3 leading-relaxed font-normal">
                    {blog.description}
                  </p>
                </div>

                {/* Styled Bottom Button Row */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <button className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group/btn transition-colors">
                    <span>Read More</span>
                    <svg
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
