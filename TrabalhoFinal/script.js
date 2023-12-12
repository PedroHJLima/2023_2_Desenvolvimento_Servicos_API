const express = require('express');
const cors = require('cors'); // Importe o pacote cors
const app = express();

const restify = require('restify');
const errors = require('restify-errors');

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

//Rotas
const livroRoutes = require('./rotas/livroRoutes');
const userRoutes = require('./rotas/userRoutes');

app.get("/",(req,res) => {
  res.send("Hello World");
});

app.use("/livros", livroRoutes);
app.use("/api/usuarios",userRoutes);

app.listen (8001, () => { 
    console.log("Servidor Iniciado");
})