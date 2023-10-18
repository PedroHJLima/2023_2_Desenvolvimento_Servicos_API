CREATE DATABASE ecomerce;

--USE ecomerce; --\c ecomerce;

CREATE TABLE cidades(
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(50)
);

CREATE TABLE clientes(
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(100) NOT NULL,
    altura FLOAT,
    nascimento DATE,
    cidade_id INT,

    FOREIGN KEY (cidade_id) REFERENCES cidades(id)
);


CREATE TABLE pedidos(
    id SERIAL PRIMARY KEY NOT NULL,
    horario TIMESTAMP,
    endereco VARCHAR(200),
    cliente_id INT,

    FOREIGN KEY (cliente_id) REFERENCES  clientes(id)
);

CREATE TABLE categorias(
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(100)
);

CREATE TABLE produtos(
    id SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(100),
    preco FLOAT,
    quantidade FLOAT,
    categoria_id INT,

    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE pedidos_produtos(
    pedido_id INT,
    produto_id INT,
    preco FLOAT,
    quantidade FLOAT,

    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

--INSERTS PARA TESTES--

INSERT INTO categorias(nome) VALUES ('bebidas');
INSERT INTO produtos (nome, preco, quantidade, categoria_id) VALUES ('coca-cola',1.99,2,1);