const clienteController = require('../controllers/clientesController');

function cidadeRoutes(servidor) {
  servidor.get('/clientes', clienteController.getClientes);
  servidor.get('/clientes/:idCat', clienteController.getClientePorId);
  servidor.post('/clientes', clienteController.adicionarCliente);
  servidor.put('/clientes/:id', clienteController.atualizarCliente);
  servidor.del('/clientes/:id', clienteController.deletarCliente);
}

module.exports = cidadeRoutes;