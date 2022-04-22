/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('recipes',tbl => {
      tbl.increments()
      tbl.string('recipe_name',64).unique().notNullable()
  })
  .createTable('steps', tbl => {
    tbl.increments()
    tbl.string('instructions')
        .notNullable()
    tbl.integer('step_number')
        .notNullable()
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
  })
  .createTable('ingredients', tbl =>{
    tbl.increments();
    tbl.string('name',64).unique().notNullable()
  })
  .createTable('quantities', tbl => { 
      tbl.increments()
      tbl.string('quantity',64)
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
    tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('steps')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
