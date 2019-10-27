import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import PortfolioCard from "./MediumPost";

import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      projects: []
    };
  }

  async componentDidMount() {
    const podata = await axios.get("/posts");
    const prdata = await axios.get("/projects");
    this.setState({ posts: podata.data.items, projects: prdata.data });
  }

  render() {
    const { posts, projects } = this.state;
    return (
      <div className="app-body">
        <Header />
        <div className="content">
          <Intro />
          <div className="projects-posts">
            <div className="posts-content">
              <div className="header-card">
                <h6>Medium Articles</h6>
              </div>

              {posts.map((story, idx) => (
                <PortfolioCard story={story} key={idx} />
              ))}

              <div className="header-card">
                <h6>Github Projects</h6>
              </div>

              {projects.map((project, idx) => (
                <PortfolioCard project={project} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
