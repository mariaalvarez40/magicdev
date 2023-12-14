// import {useState } from "react";
import "../navigation/navigation.scss";

function Navigation() {

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = 100; // Height of the sticky navigation bar, adjust as needed
    const bodyRect = document.body.getBoundingClientRect().top;
    const sectionRect = section.getBoundingClientRect().top;
    const sectionPosition = sectionRect - bodyRect;
    const offsetPosition = sectionPosition - offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="sticky-navigation"> 
    <div className="wrapper">
    <div className="logo-container"> 
      <div className="logo" onClick={() => goToTop()}></div>
    </div>

    <nav className="navigation"> 
          <ul>
            <li>
              <button onClick={() => scrollToSection('section1')}>about</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('section2')}>experience</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('section3')}>contact</button>
            </li>
          </ul>
    </nav>
    </div>
    </div>
   
  );
}
export default Navigation;