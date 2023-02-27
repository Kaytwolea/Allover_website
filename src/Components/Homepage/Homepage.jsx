import React from "react";
import Footer from "../Footer/Footer";
import About from "./About/About";
import Admission from "./Admission/Admission";
import Courses from "./Courses/Courses";
import Events from "./Events/Events";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import News from "./News/News";
import Numbers from "./Numbers/Numbers";
import Schools from "./Schools/Schools";
import Testimonials from "./Testimonials/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Numbers />
      <About />
      <Courses />
      <Schools />
      <News />
      <Admission />
      <Testimonials />
      <Events />
      <Footer />
    </div>
  );
};

export default Homepage;
