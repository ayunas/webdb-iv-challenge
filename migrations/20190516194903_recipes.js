
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();

        tbl
            .text("recipe")
            .notNullable()
            .unique();
         
        tbl
            .integer("dish_id")
            .notNullable() //required field
            .references("id")
            .inTable("dishes")
            .onDelete("RESTRICT") //still confused about RESTRIC and CASCADE
            .onUpdate("CASCADE");
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
