const autorController = require('../controllers/autorController');

function autorRoutes(servidor) {
  servidor.get('/autores',autorController.getautores);
  servidor.get('/autores/:idAut', autorController.getAutorPorID);
  servidor.post('/autores', autorController.adicionarAutor);
  servidor.put('/autores/:id', autorController.atualizarAutor);
  servidor.del('/autores/:id', autorController.deletarAutor);
}

module.exports = autorRoutes;