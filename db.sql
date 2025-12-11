CREATE DATABASE conecta;
USE conecta;



CREATE TABLE usuario(
	id_usuario INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id_usuario),
    nome VARCHAR(100) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(15) NOT NULL
);

CREATE TABLE ongs(
	id_ong INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id_ong),
    nome VARCHAR(100) NOT NULL,
    cnpj VARCHAR(20) UNIQUE NOT NULL,
    area_atuacao VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(15) NOT NULL,
    contato BIGINT(14) NOT NULL
);

CREATE TABLE post (
    id_post INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id_post),
    nome VARCHAR(50),
    categoria ENUM('Perigo', 'Denúncia', 'Sobre o Bairro') NOT NULL,
    descricao VARCHAR(500) NOT NULL,

    foto LONGBLOB,   -- Aqui será armazenado o ARQUIVO da imagem
    video LONGBLOB  -- Aqui será armazenado o ARQUIVO do vídeo
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



INSERT INTO ongs (nome, cnpj, area_atuacao, email, senha, contato) VALUES
('Instituto Vida Verde', '12.345.678/0001-90', 'Meio Ambiente', 'contato@vidaverde.org', 'verde123', 48991234567),
('Projeto Esperança', '98.765.432/0001-12', 'Assistência Social', 'info@projetoesperanca.org', 'esperanca1', 48997654321),
('Amigos dos Animais', '11.222.333/0001-44', 'Proteção Animal', 'amigos@animais.org', 'pets2025', 48993456789),
('Educar para o Futuro', '55.666.777/0001-55', 'Educação', 'contato@educarfuturo.org', 'edu2025', 48994561234),
('Saúde Solidária', '22.333.444/0001-66', 'Saúde Comunitária', 'saude@solidaria.org', 'solid123', 48998765432),
('Cultura Viva', '77.888.999/0001-77', 'Cultura e Arte', 'cultura@viva.org', 'arte2025', 48992345678),
('Mãos Unidas', '33.444.555/0001-88', 'Combate à Fome', 'maos@unidas.org', 'unidas456', 48996543210);

INSERT INTO usuario (nome, bairro, email, senha) VALUES
('Mariana Souza', 'Centro', 'mariana.souza01@email.com', 'senha123'),
('Carlos Pereira', 'Trindade', 'carlos.pereira@email.com', 'abc12345'),
('Fernanda Lima', 'Agronômica', 'fernanda.lima@email.com', 'floripa2025'),
('João Henrique', 'Coqueiros', 'joao.henrique@email.com', 'joao321'),
('Patrícia Gomes', 'Estreito', 'patricia.gomes@email.com', 'paty@456'),
('Ricardo Alves', 'Campeche', 'ricardo.alves@email.com', 'ricardo789'),
('Beatriz Martins', 'Ingleses', 'beatriz.martins@email.com', 'bmartins1');

INSERT INTO post(nome, categoria, descricao) VALUES
('Mariana Souza', 'Perigo', 'Foi avistada uma cobra próxima ao parquinho do bairro, cuidado com as crianças.'),
('Carlos Pereira', 'Denúncia', 'Um carro abandonado está ocupando vaga há meses na rua principal.'),
('Fernanda Lima', 'Sobre o Bairro', 'A praça central recebeu novas árvores e bancos, está ficando bem agradável.'),
('João Henrique', 'Perigo', 'Buraco grande na avenida principal, risco de acidentes para motos e carros.'),
('Patrícia Gomes', 'Denúncia', 'Barulho excessivo vindo de um bar até altas horas da madrugada.'),
('Ricardo Alves', 'Sobre o Bairro', 'Nova feira de artesanato será realizada todo sábado na praça.'),
('Beatriz Martins', 'Perigo', 'Poste de energia com fios soltos próximo à escola.'),
('Mariana Souza', 'Denúncia', 'Lixo acumulado em terreno baldio está atraindo ratos e insetos.'),
('Carlos Pereira', 'Sobre o Bairro', 'O bairro ganhou uma nova linha de ônibus que facilita o acesso ao centro.'),
('Fernanda Lima', 'Perigo', 'Cachorro agressivo solto na rua sem coleira.'),
('João Henrique', 'Denúncia', 'Moradores reclamam de despejo irregular de entulho em área verde.'),
('Patrícia Gomes', 'Sobre o Bairro', 'Campanha de arrecadação de roupas de inverno organizada pela associação de moradores.'),
('Ricardo Alves', 'Perigo', 'Enxurrada alagou parte da rua após chuva forte, atenção ao transitar.'),
('Beatriz Martins', 'Denúncia', 'Carro estacionado em frente a garagem impede saída de moradores.'),
('Mariana Souza', 'Sobre o Bairro', 'Novo grupo de caminhada está se reunindo todas as manhãs na orla.');