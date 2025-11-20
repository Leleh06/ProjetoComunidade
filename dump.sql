CREATE DATABASE conecta;
USE conecta;
DROP DATABASE conecta;


CREATE TABLE usuario(
	id_usuario INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id_usuario),
    nome VARCHAR(100) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(15) UNIQUE NOT NULL
);

CREATE TABLE ongs(
	id_ong INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id_ong),
    nome VARCHAR(100),
    cnpj VARCHAR(20) UNIQUE,
    area_atuacao VARCHAR(100),
    email VARCHAR(100),
    contato BIGINT(14)
);

CREATE TABLE post(
	id_post INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id_post),
    nome VARCHAR(50),
    categoria ENUM ('Perigo', 'Denúncia', 'Sobre o Bairro') NOT NULL,
    descricao VARCHAR(500) NOT NULL
);

CREATE TABLE comentar(
	user_id INT,
    FOREIGN KEY(user_id)
    REFERENCES usuario(id_usuario),
    
    ong_id INT,
    FOREIGN KEY(ong_id)
    REFERENCES ongs(id_ong),
    
    descrição VARCHAR(150)
);


CREATE TABLE curtida(
	ongLike_id INT,
    FOREIGN KEY(ongLike_id)
    REFERENCES ongs(id_ong),
    
    userLike_id INT,
    FOREIGN KEY(userLike_id)
    REFERENCES usuario(id_usuario)
);