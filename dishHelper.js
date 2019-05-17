const db = require('./data/dbConfig');

module.exports = {
    getDishes,
    getDish,
    postDish,
    putDish,
    deleteDish
};

function getDishes() {
    return db("dishes")
}

function getDish() {
    return db("dishes")
    .where({id : id})
    .first();
}

function postDish(dish) {
    return db("dishes")
    .insert(dish, "id")
    .then( ([id]) => {   //is the brackets destructuring the id?  whats the explicit way to write this?
        return findById(id)
    })
}

function putDish(id, changes) {
    return db("dishes")
    .where({id : id})
    .update(changes)
    .then(count => {
        if (count > 0) {
            return getDish(id)
        } else {
            return null;
        }
    }) //why isn't there a catch?
}

function deleteDish(id) {
    return db("dishes")
        .where({id : id})
        .del();
}
