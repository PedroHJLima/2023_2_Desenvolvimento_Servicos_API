const livroController = require('../controllers/livroController');

function categoriaRoutes(servidor) {
  servidor.get('/livros', livroController.getlivros);
  servidor.get('/livros/:idCat', livroController.getCategoriaPorId);
  servidor.post('/livros', livroController.adicionarCategoria);
  servidor.put('/livros/:id', livroController.atualizarCategoria);
  servidor.del('/livros/:id', livroController.deletarCategoria);
}

module.exports = categoriaRoutes;