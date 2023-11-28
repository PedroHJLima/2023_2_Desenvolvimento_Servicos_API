const autorController = require('../controllers/autorController');

function cidadeRoutes(servidor) {
  servidor.get('/autores', clienteController.get);
  servidor.get('/autores/:idCat', clienteController.getClientePorId);
  servidor.post('/autores', clienteController.adicionarCliente);
  servidor.put('/autores/:id', clienteController.atualizarCliente);
  servidor.del('/autores/:id', clienteController.deletarCliente);
}

module.exports = cidadeRoutes;