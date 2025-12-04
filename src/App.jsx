// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Drinks from "./components/Drinks";
// import Hero from "./components/Hero";
// import Food from "./components/Food";
// import Coffee from "./components/Coffee";
// export default function App() {
//   return (
//     <div className="bg-black min-h-screen text-white">
//       <Navbar />

//       <Routes>
//         <Route path="/Hero" element={<Hero />} />
//         <Route path="/drinks" element={<Drinks />} />
//         <Route path="/Food" element={<Food />} />
//         <Route path="/Coffee" element={<Coffee />} />
//       </Routes>
//     </div>
//   );
// }
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Drinks from "./components/Drinks";
import Hero from "./components/Hero";
import Food from "./components/Food";
import Coffee from "./components/Coffee";

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
      </Routes>
    </div>
  );
}
