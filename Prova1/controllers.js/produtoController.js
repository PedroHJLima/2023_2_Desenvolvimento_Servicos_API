// categoriaController.js
const knex = require('../knex'); // Importe o arquivo knexfile.js que acabamos de criar
const errors = require('restify-errors');

// Aqui você pode definir todas as operações relacionadas à categoria

const getProdutos = (req, res, next) => {
  knex('produtos').then((dados) => {
    res.send(dados);
  }, next);
};

const getProdutoPorId = (req, res, next) => {
  const idProduto = req.params.idProd;
  knex('produtos')
    .where('id', idProduto)
    .first()
    .then((dados) => {
      if (!dados || dados == '') {
        return res.send(new errors.BadRequestError('Cliente não encontrado'));
      } else {
        res.send(dados);
      }
    });
};

const adicionarProduto = (req, res, next) => {
    knex('produtos')
      .insert(req.body)
      .returning('*')
      .then((dados) => {
        res.send(dados[0]);
      })
      .catch(next);
  };

const atualizarProduto = (req, res, next) => {
    const id = req.params.id;
    knex('produtos')
      .where('id', id)
      .update(req.body)
      .then((dados) => {
        if (!dados) {
          return res.send(new errors.BadRequestError('Esse produto não foi encontrado'));
        }
        res.send("Cliente de id "+id+" atualizado");
      })
      .catch(next);
  };
  
  const deletarProduto = (req, res, next) => {
    const id = req.params.id;
    knex('produtos')
      .where('id', id)
      .delete()
      .then((dados) => {
        if (!dados) {
          return res.send(new errors.BadRequestError('Este produto não foi encontrado'));
        }
        res.send("Produto de id "+id+" deletada");
      })
      .catch(next);
  };
  

module.exports = {
  getProdutos,
  getProdutoPorId,
  adicionarProduto,
  atualizarProduto,
  deletarProduto,
};
