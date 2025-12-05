import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Drinks from "./components/Drinks";
import Hero from "./components/Hero";
import Food from "./components/Food";
import Coffee from "./components/Coffee";
import About from "./components/About";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/Hero" replace />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Coffee" element={<Coffee />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
