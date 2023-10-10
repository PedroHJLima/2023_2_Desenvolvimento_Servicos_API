const restify = require('restify');
const errors = require('restify-errors')

const servidor = restify.createServer({
    name:'lojinha',
    version:'1.0.0'
});

servidor.use(restify.plugins.acceptParser(servidor.acceptable));
servidor.use(restify.plugins.queryParser());
servidor.use(restify.plugins.bodyParser());

servidor.listen(8001,function() {
    console.log("%s executando em %s", servidor.name,servidor.url);
});

var knex = require('knex')({
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'',
        database:'loja_2023_2'
    }
});

servidor.get('/',(req,res,next)=>{
    res.send('Bem-vindo(a) à API')
});

servidor.get('/produtos',(req,res,next)=>{
    knex('produtos').then((dados)=>{
        res.send(dados);
    },next);
})

servidor.get('/produtos/:idProd',(req,res,next) =>{
    const idProduto = req.params.idProd;
    knex('produtos')
        .where('id',idProduto)
        .first()
        .then((dados)=>{
            if(!dados||dados ==""){
                return res.send(
                    new errors.BadRequestError("Produto não encontrado")
                )
            }else{
                res.send(dados)
            }
        })
})

servidor.post('/produtos/add',(req,res,next)=>{
    knex('produtos')
        .insert(req.body)
        .then((dados)=>{
            res.send(dados);
        },next);
});

servidor.put('/produtos/update/:id',(req,res,next)=>{
    const id = req.params.id;
    knex('produtos')
        .where('id',id)
        .update(req.body)
        .then((dados)=>{
            if(!dados){
                return res.send(new errors.BadRequestError('Esse produto não foi encontrado'));
            }
            res.send(dados);
        },next);
})

servidor.del('/produtos/:id',(req,res,next)=>{
    const id = req.params.id;
    knex('produtos')
        .where('id',id)
        .delete()
        .then((dados)=>{
            if(!dados){
                return res.send(new errors.BadRequestError('Este produto não foi encontrado'));
            }
            res.send(dados);
        },next);
});