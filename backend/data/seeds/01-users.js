exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { id: 1, username: 'Test1', email: 'test1@email.com', password: 'test123' },
          { id: 2, username: 'Test2', email: 'test2@email.com', password: 'test123' },
          { id: 3, username: 'Test3', email: 'test3@email.com', password: 'test123' }
        ]);
      });
  };