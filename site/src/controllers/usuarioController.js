var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    
    var idUsuario = req.params.idUsuario;

    usuarioModel.listar(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var cel = req.body.celServer;
    var sexo = req.body.sexoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } 
    else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } 
    else if (cel == undefined) {
        res.status(400).send("Seu celular está undefined!");
    }
    else if (sexo == undefined) {
        res.status(400).send("Seu sexo está undefined!");
    }
    else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, cel, sexo, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function enviarAssunto(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var emailContato = req.body.emailContatoServer;
    var assunto = req.body.assuntoServer;

    // Faça as validações dos valores
    if (emailContato == undefined) {
        res.status(400).send("Seu email está undefined!");
    } 
    else if (assunto == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.enviarAssunto(emailContato, assunto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarCategoria(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idade = req.body.idadeServer;
    var peso = req.body.pesoServer;
    var altura = req.body.alturaServer;
    var imcEstado = req.body.imcEstadoServer;
    var imcCalculo = req.body.resultadoIMCServer;
    var categoria = req.body.categoriaEscolhidaServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else if (peso == undefined) {
        res.status(400).send("Seu peso está undefined!");
    } else if (altura == undefined) {
        res.status(400).send("Sua altura está undefined!");
    } else if (imcEstado == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (imcCalculo == undefined) {
        res.status(400).send("Seu calculo está undefined!");
    } else if (categoria == undefined) {
        res.status(400).send("Sua categoria está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsurio está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarCategoria(idade, peso, altura, imcEstado, imcCalculo, categoria, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    enviarAssunto,
    cadastrarCategoria,
    listar,
    testar
}