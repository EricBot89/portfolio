import React from "react";

const Info = props => (
  <div className="intro-card">
    <h2>
      NYC based Developer of clean, quality code for web aplications and beyond
    </h2>
    <ul>
      <li>
        <i className="fab fa-github"></i>  Github
      </li>
      <li>
        <i className="fab fa-linkedin"></i>  Linkedin
      </li>
    </ul>
    <a href="mailto:eloucks@gmail.com">
      <button className="email-button">Email Me</button>
    </a>
  </div>
);

export default Info;
