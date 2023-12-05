const livrosController = require('../controllers/livrosController');

function categoriaRoutes(servidor) {
  servidor.get('/livros', livrosController.getLivros);
  servidor.get('/livros/:idCat', livrosController.getLivroPorIsbn);
  servidor.post('/livros', livrosController.adicionarLivro);
  servidor.put('/livros/:id', livrosController.atualizarLivro);
  servidor.del('/livros/:id', livrosController.deletarLivro);
}

module.exports = categoriaRoutes;