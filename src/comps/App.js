import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import PortfolioCard from "./MediumPost";
import Resume from "./Resume";
import { GraphQLClient as GQL } from "graphql-request";
import Feed from 'rss-to-json'

import axios from "axios";

const githubToken = process.env.GITHUB_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.gqlClient = new GQL("https://api.github.com/graphql", {
      headers: { Authorization: `Bearer ${githubToken}` }
    });
    this.projectsQuery = `{
      repositoryOwner(login: "EricBot89") {
       ... on User {
          pinnedRepositories(first: 6) {
          edges {
            node {
               name,
               description,
               url
              }
           }
         }
       }
     }
    }`;
    this.state = {
      posts: [],
      projects: []
    };
  }

  async componentDidMount() {
    // const podata = await axios.get("/posts");
    // const prdata = await axios.get("/projects");

    Feed.load("https://medium.com/feed/@eloucks", (err, rss) => {
      if(!err) {
        this.setState({posts: rss})
      }
    })

    const data = await this.gqlClient.request(this.projectsQuery)
    const projects = data.repositoryOwner.pinnedRepositories.edges

    this.setState({ projects});
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
                <h6>Resume and Skills</h6>
              </div>

              <div className="story-card">
                <Resume />
              </div>

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
