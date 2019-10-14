const express = require("express");
const path = require("path");

const server = express();

const PORT = 4545;

server.use(express.static(path.join(__dirname, "../public")));
server.use(require("volleyball"));

server.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public"));
});

server.listen(PORT, () => {
  console.log(`server active at ${PORT}`);
});
