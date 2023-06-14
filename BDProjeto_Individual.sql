CREATE DATABASE Projeto_Individual;
USE Projeto_Individual;

DROP DATABASE Projeto_Individual;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	sobrenome VARCHAR(45),
    celular varchar(14),
    sexo char(2),
	email VARCHAR(45),
	senha CHAR(8),
    CONSTRAINT chkSexo check (sexo in ("F", "M", "O"))
  ) AUTO_INCREMENT = 100;
  
  CREATE TABLE dadosCalculadora (
	idDados INT PRIMARY KEY auto_increment,
    idade INT,
    peso FLOAT,
    altura FLOAT,
    imcEstado VARCHAR(20),
    imcCalculo FLOAT,
    categoria varchar(50),
    fkUsuarioC INT,
    CONSTRAINT fkUsuarioC FOREIGN KEY fkUsuarioC (fkUsuarioC)
	REFERENCES usuario (idUsuario)
);

CREATE TABLE faleConosco (
	idDesc INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(45),
    descricao VARCHAR(250)
);

TRUNCATE TABLE usuario;
TRUNCATE TABLE dadosCalculadora;
TRUNCATE TABLE faleConosco;

SELECT * FROM usuario;
SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
INSERT INTO usuario (nome, sobrenome, celular, sexo, email, senha) VALUES ('${nome}', '${sobrenome}', '${cel}', '${sexo}', '${email}', '${senha}');

SELECT * FROM categoria;
SELECT categoria, COUNT(categoria) as Categorias FROM dadosCalculadora group by categoria;
INSERT INTO dadosCalculadora (idade, peso, altura, imcEstado, imcCalculo, categoria, fkUsuarioC) VALUES ('${idade}', '${peso}', '${altura}', '${imcEstado}', '${imcCalculo}', '${categoria}', '${fkUsuario}');
-- PLOTAGEM DOS GRAFICOS
SELECT peso AS Peso, imcCalculo AS IMCCalculo FROM dadosCalculadora WHERE fkUsuarioC = '${fk_usuario}';
SELECT idade AS Idade, peso AS Peso, altura AS Altura, imcEstado AS IMCEstado, categoria AS Categoria FROM dadosCalculadora 
	WHERE fkUsuarioC = '${fk_usuario}';
    
SELECT * FROM faleConosco;
INSERT INTO faleConosco (email, descricao) VALUES ('${emailContato}', '${assunto}');