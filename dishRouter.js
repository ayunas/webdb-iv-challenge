const express = require("express");
const dishRouter = express.Router();
const dbHelper = require("./dbHelper");
const db = require("./data/dbConfig");

dishRouter.get("/", (req, res) => {
  //res.status(200).json({message : "you have reached the dishRouter at /dishes"})
  dbHelper
    .getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

dishRouter.get("/:id", (req, res) => {
  dbHelper
    .getDish(req.params.id)
    .then(dish => {
      if (dish) {
        res.status(200).json(dish);
      } else {
        res.status(404).json({
          message: `dish with id # ${
            req.params.id
          } was not found in the database`
        });
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

dishRouter.post("/", (req, res) => {
  // if (!req.body.dish) {
  //     res.status(400).json({message : `dish key must be set on the request object`});
  // }
  console.log("the request object in dishRouter", req.body);
  db("dishes")
    .insert(req.body)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
  // dbHelper.postDish(req.body)
  //     .then( id => {
  //         res.status(201).json({message : `${req.body.dish} with id # ${id} was added to the database`})
  //     })
  //     .catch( err => {
  //         res.status(500).json(err.message)
  //     })
});

dishRouter.put("/:id", (req, res) => {
  if (req.body.dish) {
    dbHelper
      .putDish(req.params.id, req.body)
      .then(dish => {
        res.status(200).json(dish);
      })
      .catch(err => {
        res.status(500).json(err.message);
      });
  }
});

dishRouter.delete("/:id", (req, res) => {
  dbHelper
    .deleteDish(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

/*******************************************************************************************8 */

module.exports = dishRouter;
