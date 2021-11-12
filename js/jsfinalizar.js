storage = window.localStorage;
var dadosDoStorage = JSON.parse(storage.getItem("dados"))||"[]";
var usuarios2 = dadosDoStorage;

storage = window.localStorage;
var dadosDoStorage2 = JSON.parse(storage.getItem("carrinho"))||"[]";
var carrinho= dadosDoStorage2;

storage = window.localStorage;
var dadosDoStorage3 = JSON.parse(storage.getItem("compras"))||"[]";
var compras = dadosDoStorage3;

storage = window.localStorage;
var dadosDoStorage3 = JSON.parse(storage.getItem("produtos"))||"[]";
var produtos= dadosDoStorage3;

function pag_login() {
	document.getElementById("img_login").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/login.html"
}

function pag_sacola() {
	document.getElementById("img_sacola").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/sacola-de-compras.html"
}

function finalizar(){

    iniciarDadosBancarios();

    var dados_bancarios = [];
    var compra_local = [];

    if (document.getElementById('credit').checked) {
        var card = document.getElementById('credit').value;
    }

    if (document.getElementById('debit').checked) {
        var card = document.getElementById('debit').value;
    }
    dados_bancarios.push(card);

	var cpf = document.getElementById("cpf").value;
    dados_bancarios.push(cpf);
	var nome = document.getElementById("nome").value;
    dados_bancarios.push(nome);
	var numero = document.getElementById("numero").value;
    dados_bancarios.push(numero);
	var data = document.getElementById("data").value;
    dados_bancarios.push(data);
    var codigo = document.getElementById("codigo").value;
    dados_bancarios.push(codigo);

    var codigo_usuario = 0;

    for(var i = 0; i<usuarios2.length;i++){
        if(usuarios2[i][3]==true){
            codigo_usuario = i;
        }
    }
    compra_local.push(usuarios2[codigo_usuario]);
    compra_local.push(carrinho);
    compra_local.push(dados_bancarios);

    compras.push(compra_local);

    storage.setItem("compras",JSON.stringify(compras));

    carrinho = [[]];
    storage.setItem("carrinho",JSON.stringify(carrinho));

    for(var i = 0; i<produtos.length;i++){
        produtos[i][4]=false;
    }

    storage.setItem("produtos",JSON.stringify(produtos));

    window.location.href = document.location="http://localhost/vinilandia_projetoweb/pag/agradecimento.html";
}

function iniciarDadosBancarios(){
    if(!(compras instanceof Array)){
    	compras = [compras]; 
	}
}