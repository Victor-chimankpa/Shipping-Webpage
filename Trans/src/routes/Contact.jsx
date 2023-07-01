// import React from "react";

import con from "../assets/Img/contact.jpg";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <>
    <Navbar />

    <Hero cName="Hero-abt" heroImg={con} ImgC="imgc" title="Contact" />

    <ContactForm />
    <Footer />
  </>
  );
};

export default Contact;
