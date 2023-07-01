import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Support from "./routes/Support";
import Services from "./routes/Services";
// import Navbar from "./Components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
