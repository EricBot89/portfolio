import React from "react";
import PortfolioCard from "./PortfolioCard"

const Section = props => {
  const { title, data, type } = props;
  return (
    <div className="section">
      <div className="header-card">
        <h6>{title}</h6>
        <i className="fas fa-angle-down" />
      </div>

      {data.map((item, idx) => {
        if(type === "story") return <PortfolioCard story={item} key={idx} />
        if(type === "project") return <PortfolioCard project={item} key={idx} />
      })}
    </div>
  );
};

export default Section;
