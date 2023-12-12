// categoriaController.js
const knex = require('../knex'); // Importe o arquivo knexfile.js que acabamos de criar
const errors = require('restify-errors');

// Aqui você pode definir todas as operações relacionadas à categoria

const getUsers = (req, res, next) => {
  knex('usuarios').then((dados) => {
    res.send(dados);
  }, next);
};

const getUsersID = (req, res, next) => {
  const idUser = req.params.idUser;
  knex('usuarios')
    .where('id', idCategoria)
    .first()
    .then((dados) => {
      if (!dados || dados == '') {
        return res.send(new errors.BadRequestError('Usuario não encontrado'));
      } else {
        res.send(dados);
      }
    });
};

const addUser = (req, res, next) => {
    knex('usuarios')
      .insert(req.body)
      .returning('*')
      .then((dados) => {
        res.send(dados[0]);
      })
      .catch(next);
  };

const updateUser = (req, res, next) => {
    const id = req.params.id;
    knex('usuarios')
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
  
  const deleteUser = (req, res, next) => {
    const id = req.params.id;
    knex('usuarios')
      .where('id', id)
      .delete()
      .then((dados) => {
        if (!dados) {
          return res.send(new errors.BadRequestError('Este usuario não foi encontrado'));
        }
        res.send("Usuario de id "+id+" deletada");
      })
      .catch(next);
  };
  

module.exports = {
  getUsers,
  getUsersID,
  addUser,
  updateUser,
  deleteUser
};
