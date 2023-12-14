import {useState } from "react";
import "../navigation/navigation.scss";

function Navigation() {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (id) => {
    if (!isScrolling) {
      setIsScrolling(true);
      const e = window.document.getElementById(id);
      if (e) {
        e.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        setIsScrolling(false);
      }, 500); // You can adjust the delay here
    }
  };

  return (
    <div className="sticky-navigation"> 
    <div className="wrapper">
    <div className="logo-container"> 
      <div className="logo" onClick={() => scrollToSection('section0')}></div>
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