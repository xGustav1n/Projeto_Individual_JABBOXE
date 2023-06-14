var calculadoraModel = require("../models/calculadoraModel");

function ultimasCalculadoraGrafico(req, res) {

    var categoria = req.params.categoria;

    calculadoraModel.ultimasCalculadoraGrafico(categoria).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function tempo_realCalculadoraGrafico(req, res) {

    var categoria = req.params.categoria;

    console.log(`Recuperando medidas em tempo real`);

    calculadoraModel.tempo_realCalculadoraGrafico(categoria).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function ultimasUsuarioGrafico(req, res) {

    var fk_usuario = req.params.fk_usuario;

    calculadoraModel.ultimasUsuarioGrafico(fk_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function tempo_realDadosUsuario(req, res) {

    var fk_usuario = req.params.fk_usuario;

    console.log(`Recuperando medidas em tempo real`);

    calculadoraModel.tempo_realDadosUsuario(fk_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function ultimasUsuarioDados(req, res) {

    var fk_usuario = req.params.fk_usuario;

    calculadoraModel.ultimasUsuarioDados(fk_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    ultimasCalculadoraGrafico,
    tempo_realCalculadoraGrafico,
    ultimasUsuarioGrafico,
    tempo_realDadosUsuario,
    ultimasUsuarioDados

}