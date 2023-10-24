const produtoController = require('../controllers/produtoController');

function categoriaRoutes(servidor) {
  servidor.get('/produtos', produtoController.getProdutos);
  servidor.get('/produtosdis', produtoController.getProdutos);
  servidor.get('/produtos/:idProd', produtoController.getProdutoPorId);
  servidor.post('/produtos', produtoController.adicionarProduto);
  servidor.put('/produtos/:id', produtoController.atualizarProduto);
  servidor.del('/produtos/:id', produtoController.deletarProduto);
}

module.exports = categoriaRoutes;