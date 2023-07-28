import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Executives from "./pages/Executives";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/executives" element={<Executives />} />
    </Routes>
  );
}

export default App;