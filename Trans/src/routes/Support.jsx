// import React from 'react'


import Abt from "../assets/Img/support.jpg";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Support = () => {
  return (
    <>
    <Navbar />

    <Hero cName="Hero-abt" heroImg={Abt} ImgC="imgc" title="Support" />

    <Footer />
  </>
  )
}

export default Support