// import React from "react";
import Abt from "../assets/Img/Abt.jpg";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Subabt from "../Components/Subabt";
import Subsavis from "../Components/Subsavis";

const About = () => {
  return (
    <>
      <Navbar />

      <Hero cName="Hero-abt" heroImg={Abt} ImgC="imgc" title="About" />

      <Subabt />
      <Subsavis />

<AboutUs />
      <Footer />
    </>
  );
};

export default About;
