import React from "react";
import Card from "./Card";
import "./Methodology.css";

function Methodology() {
  return (
    <div className="methodology_container">
      <h2 className="heading">MODERN TEACHING METHODOLOGY</h2>
      <Card
        imgsrc="https://www.dlws.edu.in/images/Campus/Photo/Photo8.jpg"
        imgalt="no image"
        description="Experience Learning for"
        holistic="holistic personality"
        develop="development"
      />
      <Card
        imgsrc="https://www.dlws.edu.in/images/Campus/Photo/Photo1.jpg"
        imgalt="no image"
        description="Multi-Purpose"
        holistic="Auditorium"
        develop="& Labs"
      />
      <Card
        imgsrc="https://www.dlws.edu.in/images/Campus/Facilities/Photo13.jpg"
        imgalt="no image"
        description="Smart Tech"
        holistic="Classroom"
        develop="development"
      />
      <Card
        imgsrc="https://www.dlws.edu.in/images/Campus/Facilities/Photo2.jpg"
        imgalt="no image"
        description="Experience Learning for"
        holistic="holistic personality"
        develop="development"
      />
    </div>
  );
}

export default Methodology;
