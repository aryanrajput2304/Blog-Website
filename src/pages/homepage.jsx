import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import RecentBlogs from "./recentblogs";

export default function Home() {
  return (
    <div>
      <Hero />
      <RecentBlogs />
    </div>
  );
}
