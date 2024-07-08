import React from "react";
import "./Card2.css";

function Card2({ imgsrc, imgalt, description }) {
  return (
    <div className="card2_container">
      <img src={imgsrc} alt={imgalt} className="card2" />
      <p className="content2">{description}</p>
    </div>
  );
}

export default Card2;
