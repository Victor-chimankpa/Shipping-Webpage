// import React from 'react'
import "./Subsavis.css";
import SubsavisData from "./SubsavisData";
import Land from "../assets/Img/Land.jpg";
import Ocean from '../assets/Img/Ocean.jpg'
import Air from '../assets/Img/Air.jpg'



const Subsavis = () => {





  return (
    <div className="Subsavis">
      <h1>What We Offer!!</h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia{" "}
      </p>
      <div className="saviscard" >
        <SubsavisData
          image={Land}
          heading="Ground Shipping"
          text="in providing supply-chain warehousing and transport services throughout the UK, Ireland and Continental Europe.in providing supply-chain warehousing and transport services throughout the UK, Ireland and Continental Europe."
        />

        <SubsavisData
          image={Ocean}
          heading="Ocean Freight"
          text="in providing supply-chain warehousing and transport services throughout the UK, Ireland and Continental Europe.in providing supply-chain warehousing and transport services throughout the UK, Ireland and Continental Europe."
        />

        <SubsavisData
          image={Air}
          heading="Air Freight"
          text="in providing supply-chain warehousing and transport services throughout the UK, Ireland and Continental Europe.in providing supply-chain warehousing and transport services throughout the UK, Ireland and Continental Europe."
        />
      </div>
    </div>
  );
};

export default Subsavis;
