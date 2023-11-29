const restify = require('restify');
const errors = require('restify-errors');

//Rotas
const livroRoutes = require('./rotas/livroRoutes');
const autorRoutes = require('./rotas/autorRoutes');

const servidor = restify.createServer({
  name: 'biblioteca',
  version: '1.0.0',
});

servidor.use(restify.plugins.acceptParser(servidor.acceptable));
servidor.use(restify.plugins.queryParser());
servidor.use(restify.plugins.bodyParser());

servidor.listen(8001, function () {
  console.log('%s executando em %s', servidor.name, servidor.url);
});

autorRoutes(servidor);
livroRoutes(servidor);
