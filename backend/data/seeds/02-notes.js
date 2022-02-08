exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('notes').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('notes').insert([
            { 
                title: 'Groceries', 
                content: 'eggs, cheese, bread',
                users_id: 1,
            },
            { 
                title: 'Work Notes', 
                content: 'do work',
                users_id: 1,
            },
            { 
                title: 'To-Do', 
                content: 'chores, eat, work',
                users_id: 2,
            },
            { 
                title: 'Note', 
                content: 'a note',
                users_id: 3,
            },
        ]);
      });
  };