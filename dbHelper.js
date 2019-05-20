const db = require("./data/dbConfig");

function getDishes() {
  return db("dishes");
}

function getDish(dishID) {
  return db("dishes")
    .where({ id: dishID })
    .first();
}

function postDish(dish) {
  return db("dishes")
    .insert(dish, "id")
    .then(([id]) => {
      //is the brackets destructuring the id?  whats the explicit way to write this?
      return getDish(id);
    });
}

function putDish(id, changes) {
  return db("dishes")
    .where({ id: id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return getDish(id);
      } else {
        return null;
      }
    }); //why isn't there a catch?
}

function deleteDish(id) {
  return db("dishes")
    .where({ id: id })
    .del();
}

/********************************* */

function getRecipes() {
  return db("recipes");
}

module.exports = {
  getDishes,
  getDish,
  postDish,
  putDish,
  deleteDish,
  getRecipes
};
