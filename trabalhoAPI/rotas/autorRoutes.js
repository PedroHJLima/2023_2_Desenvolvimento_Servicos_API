const autorController = require('../controllers/autorController');

function cidadeRoutes(servidor) {
  servidor.get('/autores', autorController,autorController.getautores);
  servidor.get('/autores/:idCat', autorController.getAutorPorID);
  servidor.post('/autores', autorController.adicionarAutor);
  servidor.put('/autores/:id', autorController.atualizarAutor);
  servidor.del('/autores/:id', autorController.deletarAutor);
}

module.exports = cidadeRoutes;