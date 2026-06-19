import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage";
import Register from "./pages/register";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Blogs from "./pages/Blog";
import About from "./pages/About";
import Footer from "./components/footer";
import CreateBlog from "./pages/createblog";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/createblog" element={<CreateBlog />} />
      </Routes>
      <Footer />
    </div>
  );
}
