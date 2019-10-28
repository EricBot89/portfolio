import React from "react";
import Header from "./Header";
import Info from "./Info";
import PortfolioCard from "./PortfolioCard";
import Resume from "./Resume";
import { BrowserRouter as Router } from "react-router-dom";
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
    const podata = await axios.get(
      "https://nameless-wildwood-70363.herokuapp.com/posts"
    );
    const prdata = await axios.get(
      "https://nameless-wildwood-70363.herokuapp.com/projects"
    );
    this.setState({ projects: prdata.data, posts: podata.data.items });
  }

  render() {
    const { posts, projects } = this.state;
    return (
      <div className="app-body">
        <Header />
        <div className="content">
          <Info />
          <div className="scrolling-conent">
            <Router>
              <div className="posts-content">
                <div className="header-card">
                  <h6>Resume and Skills</h6>
                </div>

                <div className="story-card">
                  <Resume />
                </div>

                <div className="header-card">
                  <h6>Medium Articles</h6>
                  <i className="fas fa-angle-down" />
                </div>

                {posts.map((story, idx) => (
                  <PortfolioCard story={story} key={idx} />
                ))}

                <div className="header-card">
                  <h6>Github Projects</h6>
                  <i className="fas fa-angle-up" />
                </div>

                {projects.map((project, idx) => (
                  <PortfolioCard project={project} key={idx} />
                ))}
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
