import React from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Homepage/Navbar/Navbar";
import AboutSection1 from "../AboutSection1";
import AboutSection2 from "../AboutSection2";
import "./Vision.css";
import VisionHero from "./VisionHero";
import VisionMain from "./VisionMain";

const Vision = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <VisionHero />
      <VisionMain />
      <AboutSection1 />
      <AboutSection2 />
      <Footer />
    </div>
  );
};

export default Vision;
