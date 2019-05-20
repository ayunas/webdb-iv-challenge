
exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipe_ingredients", tbl => {
        tbl.increments();

        tbl.float("quantity")
            .notNullable();
        
        tbl.integer("recipe_id")
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");

        tbl.integer("ingredient_id")
            .notNullable()
            .references("id")
            .inTable("ingredients")
            .onDelete("RESTRICT")  //what if you leave onDelete and onUpdate out?
            .onUpdate("CASCADE");
    })   
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipe_ingredients");
};
