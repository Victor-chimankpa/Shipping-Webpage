// import React from "react";
import "./Subsavis.css";

const SubsavisData = (Props) => {
  return (
    <div className="S-card">
      <div className="S-image">
        <img src={Props.image} alt="img" />
      </div>
      <h4>{Props.heading}</h4>
      <p>{Props.text}</p>
    </div>
  );
};

export default SubsavisData;
