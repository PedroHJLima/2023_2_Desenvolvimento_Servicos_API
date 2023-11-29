CREATE DATABASE livraria;

\c livraria;

CREATE TABLE livros(
    isbn VARCHAR(10),
    nome VARCHAR(50),
    quantidade INT,
    autorId INT

);

CREATE TABLE autores(
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(100) NOT NULL
);