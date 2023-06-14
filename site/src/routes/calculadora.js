var express = require("express");
var router = express.Router();

var calculadoraController = require("../controllers/calculadoraController");

router.get("/ultimasCalculadoraGrafico/:categoria", function (req, res) {
    calculadoraController.ultimasCalculadoraGrafico(req, res);
});

router.get("/tempo_realCalculadoraGrafico/:categoria", function (req, res) {
    calculadoraController.tempo_realCalculadoraGrafico(req, res);
});

router.get("/ultimasUsuarioGrafico/:fk_usuario", function (req, res) {
    calculadoraController.ultimasUsuarioGrafico(req, res);
});

router.get("/tempo_realUsuarioGrafico/:fk_usuario", function (req, res) {
    calculadoraController.tempo_realUsuarioGrafico(req, res);
});

router.get("/ultimasUsuarioDados/:fk_usuario", function (req, res) {
    calculadoraController.ultimasUsuarioDados(req, res);
})

module.exports = router;