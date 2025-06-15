import "./index.css";
// Import components and pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Library from "./pages/Library";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div>
        {/* Routes */}
        <Route path="/" element={<Home />} /> {/* Default */}
        <Route path="/home" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </div>
    </div>
  );
}

export default App;
