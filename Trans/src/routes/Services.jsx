// import React from 'react'
import Abt from "../assets/Img/service.jpg";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Subabt from "../Components/Subabt";
import Subsavis from "../Components/Subsavis";




const Services = () => {
  return (
    <>
    <Navbar />

    <Hero cName="Hero-abt" heroImg={Abt} ImgC="imgc" title="Service" />



    <Subsavis />
    
    <Subabt />

    <Footer />
  </>
  )
}

export default Services