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

recipeRouter.get("/:id", (req, res) => {
  const recipeID = req.params.id;
  dbHelper
    .getARecipe(recipeID)
    .then(recipe => {
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res
          .status(404)
          .json({ message: `recipe with id # ${req.params.id} was not found` });
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

recipeRouter.post("/", (req, res) => {
  if (!req.body.recipe) {
    res
      .status(500)
      .json({ message: "must have a 'recipe' key on request object" });
  }

  if (!req.body.dish_id) {
    res.status(500).json({
      message:
        "dish_id key not specified.  you must specify the dish the recipe is for"
    });
  }

  dbHelper
    .postRecipe(req.body)
    .then(id => {
      res
        .status(201)
        .json({ message: `${req.body.recipe} recipe created with id # ${id}` });
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

recipeRouter.put("/:id", (req, res) => {
  if (!req.body.recipe) {
    res
      .status(500)
      .json({ message: "must have a 'recipe key on request object" });
  }

  if (!req.body.dish_id) {
    res.status(500).json({
      message:
        "dish_id key not specified. You must specify the dish the recipe is for"
    });
  }

  dbHelper
    .putRecipe(req.body, req.params.id)
    .then(id => {
      res.status(202).json({
        message: `${req.body.recipe} recipe modified with id # ${id}`
      });
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

recipeRouter.delete("/:id", (req, res) => {
  dbHelper
    .deleteRecipe(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

module.exports = recipeRouter;
