import React, { useState } from "react";
import "./HeroSection.css";

function HeroSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [query, setQuery] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }
  function handleGrade(e) {
    setGrade(e.target.value);
  }

  function handleQuery(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Grade", grade);
    localStorage.setItem("Query", query);

    setName("");
    setEmail("");
    setPhone("");
    setGrade("");
    setQuery("");
  }

  return (
    <div className="Hero_Section">
      <div className="Hero_text">
        <p>
          A PATHWAY TO <span className="Hero_pre">INFINITE POSSIBILITES</span>
        </p>
        <h3>Admissions Open</h3>
        <h3>2034-25</h3>
        <h3>
          GRADE <span className="Hero_pre">PRE-NUR TO XII </span>
        </h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2 className="text">ENQUIRE NOW</h2>
          <div className="form_input">
            <input
              type="text"
              placeholder="Parent's Name"
              value={name}
              onChange={handleName}
              className="input"
            />
          </div>
          <div className="form_input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              className="input"
            />
          </div>
          <div className="form_input">
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={handlePhone}
              className="input"
            />
          </div>
          <div className="form_input">
            <input
              type="text"
              placeholder="Grade Applying For"
              value={grade}
              className="input"
              onChange={handleGrade}
            />
          </div>
          <div className="form_input">
            <input
              type="text"
              placeholder="Query"
              value={query}
              onChange={handleQuery}
              className="input"
            />
          </div>
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
