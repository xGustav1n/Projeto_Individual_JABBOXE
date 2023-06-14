var database = require("../database/config");

function ultimasCalculadoraGrafico(categoria) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT categoria, COUNT(categoria) as Categorias FROM dadosCalculadora group by categoria;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT categoria, COUNT(categoria) as Categorias FROM dadosCalculadora group by categoria;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tempo_realCalculadoraGrafico(categoria) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT categoria, COUNT(categoria) as Categorias FROM dadosCalculadora group by categoria;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT categoria, COUNT(categoria) as Categorias FROM dadosCalculadora group by categoria;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimasUsuarioGrafico(fk_usuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT peso AS Peso, imcCalculo AS IMCCalculo FROM dadosCalculadora WHERE fkUsuarioC = ${fk_usuario};`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT peso AS Peso, imcCalculo AS IMCCalculo FROM dadosCalculadora WHERE fkUsuarioC = ${fk_usuario};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tempo_realUsuarioGrafico(fk_usuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT peso AS Peso imcCalculo AS IMCCalculo FROM dadosCalculadora WHERE fkUsuarioC = ${fk_usuario};`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT peso AS Peso, imcCalculo AS IMCCalculo FROM dadosCalculadora WHERE fkUsuarioC = ${fk_usuario};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimasUsuarioDados(fk_usuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT idade AS Idade, peso AS Peso, altura AS Altura, imcEstado AS IMCEstado, categoria AS Categoria FROM dadosCalculadora WHERE fkUsuarioC = ${fk_usuario};`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT idade AS Idade, peso AS Peso, altura AS Altura, imcEstado AS IMCEstado, categoria AS Categoria FROM dadosCalculadora WHERE fkUsuarioC = ${fk_usuario};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    ultimasCalculadoraGrafico,
    tempo_realCalculadoraGrafico,
    ultimasUsuarioGrafico,
    tempo_realUsuarioGrafico,
    ultimasUsuarioDados
}
