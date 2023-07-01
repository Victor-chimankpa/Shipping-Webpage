// import React from "react";
import "./Hero.css";


const Hero = (Props) => {

  return (
    <div className={Props.cName}>
      <img src={Props.heroImg} alt="ship" className={Props.ImgC} />
      <div className="Hero-text">
        <h1>{Props.title}</h1>
        <p>{Props.text}</p>
      </div>
    </div>
  );
};

export default Hero;
