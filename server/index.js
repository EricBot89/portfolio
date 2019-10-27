const express = require("express");
const path = require("path");
const Feed = require("rss-to-json");
const GQL = require("graphql-request").GraphQLClient

const server = express();

const PORT = 4949;


const githubToken = process.env.GITHUB_API_KEY
const gqlClient = new GQL("https://api.github.com/graphql", {headers: {Authorization: `Bearer ${githubToken}`}})
const projectsQuery = `{
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
}
`

server.use(express.static(path.join(__dirname, "../public")));
server.use(require("volleyball"));

server.use("/posts", async (req, res, next) => {
  try {
    let posts = null;
    Feed.load("https://medium.com/feed/@eloucks", (err, rss) => {
      if(!err) {
        posts = rss
        res.status(200).send(posts);
      }
      else{
        throw new Error("Feed not found")
      }
    });
  } catch (err) {
    next(err)
  }
});

server.use("/projects", async (req, res, next) => {
  try{
    const data = await gqlClient.request(projectsQuery)
    const projects = data.repositoryOwner.pinnedRepositories.edges
    res.send(projects)
  } catch(err) {
    next(err)
  }
})

server.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public"));
});

server.listen(PORT, () => {
  console.log(`server active at ${PORT}`);
});
