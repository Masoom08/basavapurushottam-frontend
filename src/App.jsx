import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Python from "./pages/python";
import Spiritual from "./pages/spiritual";
import GeetaPage from "./pages/geeta";
import Philosophy from "./pages/philosophy";
import Education from "./pages/educations";
import Career from "./pages/career";
import Media from "./pages/media";  
import BlogDetail from "./pages/BlogDetail";
import LearnAIWithMe from "./pages/ai";
import Blog from "./pages/blogs";
import Footer from "./components/Footer";
import PhilosophyDetail from "./pages/PhilosophyDetail";
import ScrollToTop from "./components/ScrollToTop";
import PythonDetail from "./pages/PythonDetail";

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/career" element={<Career />} />
        <Route path="/media" element={<Media />} />
        <Route path="/learn-python" element={<Python />} />
        <Route path="/spiritual" element={<Spiritual />} />
        <Route path="/spiritual/geeta" element={<GeetaPage />} />
        <Route path="/philosophy" element={<Philosophy/>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:category/:id" element={<BlogDetail />} />
        <Route path="/learn-ai" element={<LearnAIWithMe />} />
        <Route path="/philosophy/:id" element={<PhilosophyDetail />} />
        <Route path="/python/:id" element={<PythonDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
