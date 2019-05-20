const express = require("express");
const dishRouter = require("./dishRouter");
const recipeRouter = require("./recipeRouter");
const bodyParser = express.json();

const server = express();

server.use(bodyParser);

server.get("/", (req, res) => {
  res.send(`<h2> Welcome to the Recipe Cook Book! </h2>`);
});

server.use("/dishes", dishRouter);
server.use("/recipes", recipeRouter);

module.exports = server;
