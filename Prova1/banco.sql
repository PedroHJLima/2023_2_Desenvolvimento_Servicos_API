CREATE DATABASE ecomerce;

\c ecomerce;

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
    horario TIMESTAMP DEFAULT NOW(),
    endereco VARCHAR(200),
    cliente_id INT,
    ativo BOOLEAN DEFAULT TRUE,

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
    disponivel BOOLEAN DEFAULT TRUE,

    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE pedidos_produtos(
    pedido_id INT,
    produto_id INT,
    preco FLOAT,
    quantidade FLOAT,

    PRIMARY KEY (pedido_id, produto_id),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

--INSERTS PARA TESTES--

INSERT INTO categorias(nome) VALUES ('bebidas');
INSERT INTO produtos (nome, preco, quantidade, categoria_id) VALUES ('coca-cola',1.99,2,1);
INSERT INTO cidades(nome) VALUES ("Porto Alegre");
INSERT INTO clientes(nome,altura,nascimento,cidade_id) VALUES('Pedro',1.80,'25-03-2003',1);
INSERT INTO produtos( endereco, cliente_id) VALUES ("Rua álvaro Domingues",1)