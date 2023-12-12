const autorController = require('../controllers/userController');

function cidadeRoutes(servidor) {
  servidor.get('/users',autorController.getUsers);
  servidor.get('/users/:idCat', autorController.getUsersID);
  servidor.post('/users', autorController.addUser);
  servidor.put('/users/:id', autorController.updateUser);
  servidor.del('/users/:id', autorController.deleteUser);
}

module.exports = cidadeRoutes;