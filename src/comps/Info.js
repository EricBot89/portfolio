import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Info = props => (
  <div className="info-card">
    <h2>NYC based Developer</h2>
    <ul>
      <Router>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>

      <li>
        <Link to="/featured-projects">See more of my projects</Link>
      </li>

      <h2>Find me elsewhere online!</h2>
      <li>
        <ul>
          <li>
            <a href="https://github.com/EricBot89">
              <i className="fab fa-github" /> Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eric-s-loucks">
              <i className="fab fa-linkedin" /> Linkedin
            </a>
          </li>
        </ul>
      </li>
      </Router>
    </ul>
    <a href="mailto:eloucks@gmail.com">
      <button className="email-button">Email Me</button>
    </a>
  </div>
);

export default Info;
