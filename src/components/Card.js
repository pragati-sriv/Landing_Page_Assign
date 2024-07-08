import React from "react";
import "./Card.css";
function Card({ imgsrc, imgalt, description, holistic, develop }) {
  return (
    <div>
      <div className="card_container">
        <img src={imgsrc} alt={imgalt} className="img_1" />
        <p className="content_1 yellow-background">
          {description}
          <div className="holistic">{holistic}</div>
          <div className="develop">{develop}</div>
        </p>
      </div>
    </div>
  );
}

export default Card;
