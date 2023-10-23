const restify = require('restify');
const errors = require('restify-errors');
const categoriaController = require('./controllers.js/categoriaController');

//Rotas
const categoriaRoutes = require('./rotas/categoriaRoutes');
const cidadeRoutes = require('./rotas/cidadeRoutes');
const clienteRoutes = require('./rotas/clienteRoutes');
const produtoRoutes = require('./rotas/produtoRoutes');

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
produtoRoutes(servidor)