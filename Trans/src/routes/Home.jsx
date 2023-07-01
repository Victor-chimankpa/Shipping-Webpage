//  import React from 'react'
import Ship from "../assets/Img/ship(1).jpg";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Button from '../Components/Button'
import Subabt from "../Components/Subabt";
import Subsavis from "../Components/Subsavis";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        heroImg={Ship}
        ImgC = 'imgc'
        title="Safe & Reliable Logistic Solution "
        text="Ship, manage, track, deliver always reliable"
        
      />
       <Button />

       <Subabt />

       <Subsavis />

       
       <Footer />
    </>
  );
};

export default Home;
