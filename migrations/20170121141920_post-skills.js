'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_skills', (table) => {
    table.increments();
    table.integer('skill_id').references('id').inTable('skills').onDelete('CASCADE').index();
    table.integer('post_id').references('id').inTable('posts').onDelete('CASCADE').index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post_skills');
};
