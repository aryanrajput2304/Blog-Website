import React from "react";

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold mb-6">About BlogSphere</h1>

          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            A platform where writers, developers, and creators share their
            ideas, experiences, and knowledge with the world.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
              alt="About Blog"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>

            <p className="text-gray-600 text-lg leading-8">
              BlogSphere was created to provide a simple and engaging platform
              where people can publish blogs, share knowledge, and connect with
              readers around the globe.
            </p>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              Whether you're a developer, student, traveler, entrepreneur, or
              storyteller, Blogify gives you the tools to express your thoughts
              and build an audience.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose BlogSphere?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">✍ Easy Publishing</h3>

            <p className="text-gray-600">
              Create and publish blogs quickly with a clean writing experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🌍 Global Reach</h3>

            <p className="text-gray-600">
              Share your knowledge and reach readers from around the world.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🚀 Modern Platform</h3>

            <p className="text-gray-600">
              Fast, responsive, and designed with modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-4 text-center gap-8">
            <div>
              <h3 className="text-5xl font-bold text-blue-600">10K+</h3>
              <p className="mt-2 text-gray-600">Articles</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">5K+</h3>
              <p className="mt-2 text-gray-600">Writers</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">100K+</h3>
              <p className="mt-2 text-gray-600">Readers</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">50+</h3>
              <p className="mt-2 text-gray-600">Categories</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
