import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Methodology from "./components/Methodology";
import Section4 from "./components/Section4";
import Navbar from "./components/Navbar";
import Section6 from "./components/Section6";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Methodology />
      <Section4 />
      <Section6 />
      {/* <Routes>
        <Route path="/about" element={<AboutSection/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
