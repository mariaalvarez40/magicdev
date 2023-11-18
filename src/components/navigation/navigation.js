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
       <nav className="navigation"> 
      <ul>
        <li>
          <button onClick={() => scrollToSection('section1')}>Section 1</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('section2')}>Section 2</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('section3')}>Section 3</button>
        </li>
      </ul>
    </nav>
    </div>
   
  );
}
export default Navigation;