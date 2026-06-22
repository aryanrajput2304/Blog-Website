import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage";
import Register from "./pages/register";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Blogs from "./pages/Blog";
import About from "./pages/About";
import Footer from "./components/footer";
import CreateBlog from "./pages/createblog";
import BlogDetails from "./pages/BLogdetails";
import Profile from "./pages/profile";
import ProtectedRoute from "./components/protectedRoute";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/createblog"
          element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}
