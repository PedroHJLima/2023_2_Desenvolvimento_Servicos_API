const pool = require("./data-base.js");

var express = require('express');
var http = require('http');
const { Http2ServerRequest } = require('http2');
var app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

  app.get("/",(req,res) => { 
        pool.query("SELECT * FROM produtos", (error, result) => {
            if (error){
                 throw error;
            }
            res.status(200).json(result.rows)
        })
});

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

app.listen (3001, () => { 
    console.log("Servidor Iniciado");
})