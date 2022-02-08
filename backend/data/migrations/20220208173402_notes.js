/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (tbl) => {
      tbl.increments();
      tbl.string('username', 255).notNullable().unique();
      tbl.string('email', 255).notNullable().unique();
      tbl.string('password', 255).notNullable();
  })

  .createTable('notes', (tbl) => {
      tbl.increments();
      tbl.string('title');
      tbl.text('content');
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('notes');
};
