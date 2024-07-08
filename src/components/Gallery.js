import React from "react";
import "./Gallery.css";
function Card({ imgsrc, imgalt }) {
  return (
    <div>
      <div className="gallery_container">
        <img src={imgsrc} alt={imgalt} className="gallery_img" />
      </div>
    </div>
  );
}

export default Card;
