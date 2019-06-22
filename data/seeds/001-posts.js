
exports.seed = function(knex, Promise) {
      return knex('posts').insert([
        {
          username: "Kylo-Ren", 
          description: 'I am the force. Also, this BE stuff isn too bad'
        },
      
        {
          username: "Yoda", 
          description: 'fear leads to anger, anger leads to hate, hate leads to suffering'
        },
       
      ]);
};
