// categoriaController.js
const knex = require('../knex'); // Importe o arquivo knexfile.js que acabamos de criar
const errors = require('restify-errors');

// Aqui você pode definir todas as operações relacionadas à categoria

const getAutores = (req, res, next) => {
  knex('autores').then((dados) => {
    res.send(dados);
  }, next);
};

const getAutoresPorId = (req, res, next) => {
  const idCategoria = req.params.idCat;
  knex('autores')
    .where('id', idCategoria)
    .first()
    .then((dados) => {
      if (!dados || dados == '') {
        return res.send(new errors.BadRequestError('Cliente não encontrado'));
      } else {
        res.send(dados);
      }
    });
};

const adicionarAutor = (req, res, next) => {
    knex('autores')
      .insert(req.body)
      .returning('*')
      .then((dados) => {
        res.send(dados[0]);
      })
      .catch(next);
  };

const atualizarAutor = (req, res, next) => {
    const id = req.params.id;
    knex('autores')
      .where('id', id)
      .update(req.body)
      .then((dados) => {
        if (!dados) {
          return res.send(new errors.BadRequestError('Esse cliente não foi encontrado'));
        }
        res.send("Cliente de id "+id+" atualizado");
      })
      .catch(next);
  };
  
  const deletarAutor = (req, res, next) => {
    const id = req.params.id;
    knex('autores')
      .where('id', id)
      .delete()
      .then((dados) => {
        if (!dados) {
          return res.send(new errors.BadRequestError('Este cliente não foi encontrado'));
        }
        res.send("Cliente de id "+id+" deletada");
      })
      .catch(next);
  };
  

module.exports = {
  getAutores,
  getAutoresPorId,
  adicionarAutor,
  atualizarAutor,
  deletarAutor
};
