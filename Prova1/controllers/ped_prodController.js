const knex = require('../knex');
const errors = require('restify-errors');

const getPed_Prod = (req, res, next) => {
  knex('pedidos_produtos').then((dados) => {
    res.send(dados);
  }, next);
};

const adicionarPed_Prod = (req, res, next) => {
    knex('pedidos_produtos')
      .insert(req.body)
      .returning('*')
      .then((dados) => {
        res.send(dados[0]);
      })
      .catch(next);
  };
  

module.exports = {
  getPed_Prod,
  adicionarPed_Prod
};
