const knex = require('../knex');
const errors = require('restify-errors');

// Aqui você pode definir todas as operações relacionadas à categoria

const getLivros = (req, res, next) => {
  knex('livros').then((dados) => {
    res.send(dados);
  }, next);
};

const getLivroPorIsbn = (req, res, next) => {
  const idCategoria = req.params.idCat;
  knex('livros')
    .where('id', idCategoria)
    .first()
    .then((dados) => {
      if (!dados || dados == '') {
        return res.send(new errors.BadRequestError('Produto não encontrado'));
      } else {
        res.send(dados);
      }
    });
};

const adicionarLivro = (req, res, next) => {
  knex('livros')
    .insert(req.body)
    .then((dados) => {
      res.send(dados);
    }, next);
};

const atualizarLivro = (req, res, next) => {
    const id = req.params.id;
    knex('livros')
      .where('id', id)
      .update(req.body)
      .then((dados) => {
        if (!dados) {
          return res.send(new errors.BadRequestError('Essa categoria não foi encontrada'));
        }
        res.send("Categoria de id "+id+" atualizado");
      })
      .catch(next);
  };
  
  const deletarLivro = (req, res, next) => {
    const id = req.params.id;
    knex('livros')
      .where('id', id)
      .delete()
      .then((dados) => {
        if (!dados) {
          return res.send(new errors.BadRequestError('Esta categoria não foi encontrada'));
        }
        res.send("Categoria de id "+id+" deletada");
      })
      .catch(next);
  };
  

module.exports = {
  getLivros,
  getLivroPorIsbn,
  adicionarLivro,
  atualizarLivro,
  deletarLivro,
};
