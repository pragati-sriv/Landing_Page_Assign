import React from "react";
import Card2 from "./Card2";
import "./Section4.css";

function Section() {
  return (
    <div className="section4">
      <h2 className="heading">
        OUR WAYS. OUR METHODS.{" "}
        <span className="difference">OUR DIFFERENCE</span>
      </h2>
      <Card2
        imgsrc="https://www.dlws.edu.in/images/Campus/Photo/Photo1.jpg"
        imgalt="no image"
        description="Excursion and visits"
      />
      <Card2
        imgsrc="https://www.dlws.edu.in/images/Campus/Facilities/3.jpg"
        imgalt="no image"
        description="Parents-partners in education"
      />
      <Card2
        imgsrc="https://www.dlws.edu.in/images/Curriculum/SCHOOLREADING.jpg"
        imgalt="no image"
        description="Talent and Exploations"
      />
      <Card2
        imgsrc="https://www.dlws.edu.in/images/Campus/Activity/Photo13.jpg"
        imgalt="no image"
        description="Students exchange program"
      />
      <Card2
        imgsrc="https://www.mountabuschool.com/awards/1257-2.jpg"
        imgalt="no image"
        description="Yoga and meditatations"
      />
      <Card2
        imgsrc="https://www.dlws.edu.in/images/Campus/Activity/Photo7.jpg"
        imgalt="no image"
        description="Experimental learning"
      />
      <Card2
        imgsrc="https://www.dlws.edu.in/images/Campus/Activity/Photo4.jpg"
        imgalt="no image"
        description="Incentive Schemes for students"
      />
      <Card2
        imgsrc="https://www.dlws.edu.in/images/Campus/Activity/Photo3.jpg"
        imgalt="no image"
        description="Student Social responsibility"
      />
    </div>
  );
}

export default Section;
