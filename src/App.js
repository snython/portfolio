import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ContactMe from "./components/ContactMe";

function App() {
  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // You can use navigate hook inside ContactMe component instead
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/contact"
              element={<ContactMe handleFormSubmit={handleFormSubmit} />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
