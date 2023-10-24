const restify = require('restify');
const errors = require('restify-errors');

//Rotas
const categoriaRoutes = require('./rotas/categoriaRoutes');
const cidadeRoutes = require('./rotas/cidadeRoutes');
const clienteRoutes = require('./rotas/clienteRoutes');
const pedidoRoutes = require('./rotas/pedidoRoutes');
const produtoRoutes = require('./rotas/produtoRoutes');
const ped_prodRoutes = require('./rotas/ped_prodRoutes');

const servidor = restify.createServer({
  name: 'lojinha',
  version: '1.0.0',
});

servidor.use(restify.plugins.acceptParser(servidor.acceptable));
servidor.use(restify.plugins.queryParser());
servidor.use(restify.plugins.bodyParser());

servidor.listen(8001, function () {
  console.log('%s executando em %s', servidor.name, servidor.url);
});

categoriaRoutes(servidor);
cidadeRoutes(servidor);
clienteRoutes(servidor);
produtoRoutes(servidor);
pedidoRoutes(servidor);
ped_prodRoutes(servidor)