import React from "react";
import "./Navbar.css";
// import { useNavigate } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate();

  // function handleNavigate(){
  //   navigate('/about')
  // }
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/assets/logo.jfif" alt="Logo" className="logo" />
      </div>
      <div className="navbar-text">
        <p className="school_name">Darbari Lal Foundation World School</p>
      </div>
      {/* <div className="about_nav">
        {" "}
          <p>About</p>
      </div> */}
      <div className="navbar-address">
        <p className="address">H5-31, Sector Zeta-1, Greater Noida (UP)</p>
      </div>
    </div>
  );
}

export default Navbar;
