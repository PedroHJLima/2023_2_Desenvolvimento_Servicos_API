var express = require('express');
var http = require('http');
const { Http2ServerRequest } = require('http2');
var app = express();

var produtos = ["Coca-Cola","Pepsi"]

app.get('/', (req,res) =>{
    res.status(200).send("Bem-vindo à API REST");
    }
);

app.get('/produtos', (req,res) =>{
    res.status(200).send(produtos);
    }
);
app.get('/produtos/:posicao', (req,res) =>{
    index = parseInt(req.params.posicao) - 1
    res.status(200).send(produtos[index]);
    }
);
app.post('/produtos', (req,res) =>{
    nome = "Prod_"+produtos.length;
    produtos.push(nome);
    res.status(200).send("Produto "+nome+" adicionado");
    }
);

http.createServer(app).listen(8001, () =>{
    console.log('Servidor iniciado em http://localhost:8001');
});