import "../contact/contact.scss";
import React from 'react';

function Contact() {
  return (
    <div className="contact-section" id="section3">
    <div className="contact-wrapper">
      <div className="contact-content">
        <h1>Let's collaborate on your next project</h1>
        <div className="contact-socials">
            <a href="mailto:alvarezzeamaria@gmail.com">
              <div className="gmail"></div>
            </a>
            <a href="https://www.linkedin.com/in/alvarezmaria1/" rel="noopener noreferrer" target="_blank">
              <div className="linkedIn"></div>
            </a> 
        </div>
      </div>
      <div className="contact-image"></div>
    </div>   
  </div>
  );
}

export default Contact;