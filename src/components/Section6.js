import React from "react";
import Gallery from "./Gallery";
import "./Section6.css";

function Section6() {
  return (
    <div className="section6">
      <h2 className="heading">GALLERY</h2>
      <Gallery
        imgsrc="https://www.dlws.edu.in/images/Campus/Photo/Photo8.jpg"
        imgalt="no image"
      />
      <Gallery
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEC4dK_fIkqv-Qx0qRYz6d_yW9_HD1hvgu_Q&s"
        imgalt="no image"
      />
      <Gallery
        imgsrc="https://www.dlws.edu.in/images/Home/soprts.jpg"
        imgalt="no image"
      />
      <Gallery
        imgsrc="https://www.dlws.edu.in/images/Campus/Photo/Photo1.jpg"
        imgalt="no image"
      />
      <p className="footer">Copyright @ DLWS School 2024-25</p>
    </div>
  );
}

export default Section6;
