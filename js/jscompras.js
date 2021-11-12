
storage = window.localStorage;
var dadosDoStorage = JSON.parse(storage.getItem("dados"))||"[]";
var usuarios2 = dadosDoStorage;

storage = window.localStorage;
var dadosDoStorage2 = JSON.parse(storage.getItem("carrinho"))||"[]";
var carrinho= dadosDoStorage2;

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

window.onload = function() {
    criarCarrinho();
    montarBotao();
    verificador();
}

function apresentaTabela() {
    
    var dados = ' ';

    document.getElementById("compras").innerHTML = " ";

    dados += '<table border="0" width=100% cellspacing="11.5px" class="table">';

    for(var i=1; i < carrinho.length; i++) {
        dados += '<tr>';
        dados += '<td width="525px">' +carrinho[i][0]+ '</td>';
        dados += '<td>' +carrinho[i][1]+ '</td>';
        dados += '<td>' +carrinho[i][2]+ '</td>';
        dados += '</tr>';
    }
    dados += '</table>'
    document.getElementById("compras").innerHTML += dados;
}

function verificador(){
    if(carrinho.length==1){
        document.getElementById("compras").innerHTML = "<p class='empty'>Não existem produtos no carrinho !!</p>";
    }
    else{
        apresentaTabela();
    }
}

function criarCadastros(){
	if(!(usuarios2 instanceof Array)){
    	usuarios2 = [usuarios2]; 
	}
}

function criarCarrinho(){
	if(!(carrinho instanceof Array)){
    	carrinho = [carrinho]; 
	}
}

function finalizarCompra(){
    
    criarCadastros();

    var usuario_logado = false;

    if(usuarios2.length==1){
        alert("Você não pode finalizar a compra - Faça o login !!!");
    }

    if(usuarios2.length>1){
        for(var i =0; i<usuarios2.length;i++){
            if(usuarios2[i][3]==true){
                usuario_logado = true;
                break;
            }
            else{
                usuario_logado==false;
            }
        }
        if(usuario_logado==true){
            window.location.href = document.location="http://localhost/vinilandia_projetoweb/pag/finalizar-compra.html";
        }
        else{
            alert("Você não pode finalizar a compra - Faça o login !!!");
        }
    }

}

function montarBotao(){
    if(carrinho.length<=1){
        document.getElementById("div_compras").innerHTML = "<p>Sem Produtos</p>"
    }
    else{
        document.getElementById("div_compras").innerHTML = "<button class='estilo_button' onclick='finalizarCompra()'> Finalizar compra </button>";
    }
}