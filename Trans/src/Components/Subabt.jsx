// import React from 'react'
import subImg from '../assets/Img/sub.jpg' 
import "./Subabt.css";

const Subabt = () => {
  return (
    <div className="container">
      <div className="SubAbt">
        <div className="sub-text " data-aos = 'fade-right'>
          <h2>
            Worldwide Logistics, Air
            <br /> Freight Forwarding, Road <br /> Haulage.
          </h2>
          <p>
            Qesco Logistics is a leading third party contract logistics company
            based in the Midlands, United Kingdom. We specialise in providing
            supply-chain warehousing and transport services throughout the UK,
            Ireland and Continental Europe.
          </p>

          <p>
            Qesco Logistics is a leading third party contract logistics company
            based in the Midlands, United Kingdom. We specialise in providing
            supply-chain warehousing and transport services throughout the UK,
            Ireland and Continental Europe.
          </p>
        </div>

        <div className="image" data-aos = 'fade-up'>
          <div className="div1"></div>
          <img src={subImg} alt="img" />
        </div>

      </div>
    </div>
  );
};

export default Subabt;
