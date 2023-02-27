import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Homepage from "../Homepage/Homepage";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarHead from "../Homepage/Navbar/NavbarHead";
import "./About.css";
import AboutHero from "./AboutHero";
import AboutMain from "./AboutMain";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <AboutHero />
      <AboutMain />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <Footer />
    </div>
  );
};

export default AboutUs;
