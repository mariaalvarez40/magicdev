import "../experience/experience.scss";
import React from 'react';

function Experience() {
  return (
    <div className="experience-section" id="section2">
      <div className="experience-wrapper">
        <h1>What I've Done</h1>
        <p>This component is currently undergoing reconstruction. <br></br> However, below is a quick glimpse of the amazing things I've built. </p>
        <button className="button" id="button-2">
            <div id="slide"></div>
            <a href={require("../../assets/resume.pdf")} download="resumeFile">View Resume</a>         
      </button>

      </div>
    </div>
  );
}

export default Experience;