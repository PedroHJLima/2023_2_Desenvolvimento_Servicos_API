// categoriaController.js
const knex = require('../knex'); // Importe o arquivo knexfile.js que acabamos de criar
const errors = require('restify-errors');

// Aqui você pode definir todas as operações relacionadas à categoria

const getautores = (req, res, next) => {
  knex('autor').then((dados) => {
    res.send(dados);
  }, next);
};

const getAutorPorID = (req, res, next) => {
  const idCategoria = req.params.idCat;
  knex('autor')
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
    knex('autor')
      .insert(req.body)
      .returning('*')
      .then((dados) => {
        res.send(dados[0]);
      })
      .catch(next);
  };

const atualizarAutor = (req, res, next) => {
    const id = req.params.id;
    knex('autor')
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
    knex('autor')
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
  getautores,
  getAutorPorID,
  adicionarAutor,
  atualizarAutor,
  deletarAutor,
};
