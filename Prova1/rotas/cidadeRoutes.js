const categoriaController = require('../controllers.js/cidadeController');

function cidadeRoutes(servidor) {
  servidor.get('/cidades', categoriaController.getCidades);
  servidor.get('/cidades/:idCat', categoriaController.getCidadePorId);
  servidor.post('/cidades', categoriaController.adicionarCidade);
  servidor.put('/cidades/:id', categoriaController.atualizarCidade);
  servidor.del('/cidades/:id', categoriaController.deletarCidade);
}

module.exports = cidadeRoutes;