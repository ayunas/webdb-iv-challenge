
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe: 'Grilled Mushroom Swiss Burger', dish_id: 1},
        {recipe: 'Sloppy Joes', dish_id: 1},
        {recipe: 'Slider Mini', dish_id: 1}
      ]);
    });
};