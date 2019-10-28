import React from "react";
import PortfolioCard from "./PortfolioCard";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    let display = !this.state.display;
    this.setState({ display });
  }

  render() {
    const { title, data, type } = this.props;
    const { display } = this.state;
    const arrowDir = display ? "up" : "down";
    return (
      <div className="section">
        <div className="header-card">
          <h6>{title}</h6>
          <i
            className={`fas fa-angle-${arrowDir} section-dispay-toggle`}
            onClick={this.toggleDisplay}
          />
        </div>
        {display
          ? data.map((item, idx) => {
              if (type === "story")
                return <PortfolioCard story={item} key={idx} />;
              if (type === "project")
                return <PortfolioCard project={item} key={idx} />;
            })
          : null}
      </div>
    );
  }
}

export default Section;
