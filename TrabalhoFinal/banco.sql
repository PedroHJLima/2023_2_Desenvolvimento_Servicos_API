CREATE DATABASE livraria;

\c livraria;

CREATE TABLE livros(
    isbn VARCHAR(10) PRIMARY KEY,
    nome VARCHAR(50),
    retirado BOOLEAN DEFAULT false
);

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    livro VARCHAR(10),
    data_devolucao TIMESTAMP,
    FOREIGN KEY (livro) REFERENCES livros(isbn)
);

INSERT INTO usuarios (nome,email) VALUES ('Pedro','pedrohjl@hotmail.com');

INSERT INTO livros(isbn,nome) VALUES ('123','Livro1');