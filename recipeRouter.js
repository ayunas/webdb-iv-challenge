const express = require("express");
const recipeRouter = express.Router();
const dbHelper = require("./dbHelper");

recipeRouter.get("/", (req, res) => {
  dbHelper
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

module.exports = recipeRouter;
