import React from "react";

const PorfolioCard = props => {
  if (props.story) {
    const { title, description, link } = props.story;
    let useLink = false;
    if (!description) {
      useLink = true;
    }
    return (
      <div className="story-card">
        <h3>{title}</h3>
        {useLink ? (
          <a href={link}>Read {title} >></a>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    );
  }
  if (props.project) {
    console.log(props.project)
    const { name, description, url } = props.project.node;
    return (
      <div className="story-card">
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={url}>Check out {name} on github</a>
      </div>
    );
  }
};

export default PorfolioCard;
