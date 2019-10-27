import React from "react";

const Info = props => (
  <div className="intro-card">
    <h2>
      NYC based Developer of clean, quality code for web aplications and beyond
    </h2>
    <ul>
      <li>
        <a href="https://github.com/EricBot89"><i className="fab fa-github"></i>  Github</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/eric-s-loucks"><i className="fab fa-linkedin"></i>  Linkedin</a>
      </li>
    </ul>
    <a href="mailto:eloucks@gmail.com">
      <button className="email-button">Email Me</button>
    </a>
  </div>
);

export default Info;
