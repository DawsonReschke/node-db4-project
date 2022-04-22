/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('table_name').del()
//   await knex('table_name').insert([
//     {id: 1, colName: 'rowValue1'},
//     {id: 2, colName: 'rowValue2'},
//     {id: 3, colName: 'rowValue3'}
//   ]);
// };
exports.seed = async function (knex){
  await knex('quantities').del()
  await knex('ingredients').del()
  await knex('steps').del()
  await knex('recipes').del()
  await knex('recipes').insert([
    {id:1,recipe_name:'Orange juice'},
    {id:2,recipe_name:'Pancakes'},
    {id:3,recipe_name:'Steak'}
  ])
  await knex('steps').insert([
    {id:1, instructions:'Squeeze oranges', step_number:2,recipe_id:1},
    {id:2, instructions:'Pour flour into bowl', step_number:1,recipe_id:2},
    {id:3, instructions:'Cook steak on grill', step_number:1,recipe_id:3},
  ])
  await knex('ingredients').insert([
    {id: 1,name:'orange'},
    {id: 2,name:'flour'},
    {id: 3,name:'steak'},
  ])
  await knex('quantities').insert([
    {id: 1, quantity:'At least 10', ingredient_id:1,step_id:1},
    {id: 2, quantity:'3 cups', ingredient_id:2,step_id:2},
    {id: 3, quantity:'16 oz', ingredient_id:3,step_id:3},
  ])

}