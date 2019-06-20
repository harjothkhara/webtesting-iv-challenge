exports.up = function(knex, Promise) {
    return knex.schema.createTable("posts", table => {
        table.increments();
        table.string("username", 50);
        table.string("description", 500);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("posts");
};
