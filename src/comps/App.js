import React from "react";
import Header from "./Header";
import Info from "./Info";
import Resume from "./Resume";
import Section from "./Section";
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

                <Section data={posts} title="Medium Articles" type="story" display={true} />

                <Section data={projects} title="Github Pins" type="project" disply={false}/>

              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
