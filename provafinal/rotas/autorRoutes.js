const autorController = require('../controllers/autorController');

function cidadeRoutes(servidor) {
  servidor.get('/autores', autorController.getAutores);
  servidor.get('/autores/:id', autorController.getAutoresPorId);
  servidor.post('/autores', autorController.adicionarAutor);
  servidor.put('/autores/:id', autorController.atualizarAutor);
  servidor.del('/autores/:id', autorController.deletarAutor);
}

module.exports = cidadeRoutes;