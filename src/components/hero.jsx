import React from "react";

export default function Hero() {
  return (
    <section
      className="h-[90vh] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/hero (4).png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mt-4 sm:mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Share Your Stories
            <br />
            Inspire The World
          </h1>

          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Read, write, and discover amazing blogs about technology,
            programming, travel, lifestyle, and more.
          </p>

          {/* Responsive Buttons: Column on small screens, Row on mobile/tablet up */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 px-6 sm:px-0">
            <button className="w-full sm:w-auto bg-blue-600 px-8 py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition order-1">
              Start Reading
            </button>

            <button className="w-full sm:w-auto border border-white px-8 py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition order-2">
              Write a Blog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
