import "./index.css";
import { Route, Routes } from "react-router-dom";
// Import components and pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Library from "./pages/Library";

function App() {
  return (
    <div className="ml-4 mt-6">
      {/* Navbar */}
      <Navbar />
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default */}
          <Route path="/home" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
