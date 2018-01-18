'use strict';
module.exports = function(app) {
  var usersList = require('../controllers/usersController');

  app.route('/users')
    .get(usersList.index)
    .post(usersList.create);

  app.route('/users/:id')
    .get(usersList.show)
    .put(usersList.update)
    .delete(usersList.delete);
};
