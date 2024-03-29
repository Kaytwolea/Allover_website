import React, { lazy } from "react";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/About/AboutUs";
import Vision from "./Components/About/Vision/Vision";

// const Homepage = React.lazy(() => import("./Components/Homepage/Homepage"));
// const AboutUs = React.lazy(() => import("./Components/About/AboutUs"));
// const Vision = React.lazy(() => import("./Components/About/Vision/Vision"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/vision" element={<Vision />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
