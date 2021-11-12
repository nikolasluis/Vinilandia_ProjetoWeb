/* Comentários
(Função Procurar e Função Login)
*/

storage = window.localStorage;
var dadosDoStorage2 = JSON.parse(storage.getItem("carrinho"))||"[]";
var carrinho= dadosDoStorage2;

storage = window.localStorage;
var dadosDoStorage = JSON.parse(storage.getItem("dados"));
var usuarios3 = dadosDoStorage;

storage = window.localStorage;
var dadosDoStorage3 = JSON.parse(storage.getItem("produtos"))||"[]";
var produtos= dadosDoStorage3;

function pag_cadastro() {
	document.getElementById("b_cadastro").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/cadastro.html"
}

function pag_sacola() {
	document.getElementById("img_sacola").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/sacola-de-compras.html"
}

window.onload = function() {
    criarCarrinho();
}

function validacaoLogin(){

	criarCadastros();

	var username = document.getElementById("username").value;
	var username_password = document.getElementById("username_password").value;
	
	var aux = 0;
	var pos = 0;

	for(var i = 0; i<usuarios3.length;i++){
		if(username == usuarios3[i][0]){
			pos = i;
		}
		else{
			aux++;
		}
	}

	if(aux==usuarios3.length){
		usuaritos();
		document.getElementById("username").focus();
		return false;
	}

	apagarCampo();


	if(username_password!=usuarios3[pos][2]){
		senhas();
		document.getElementById("username_password").focus();
		return false;
	}
	
	apagarCampo();
	
	for(var i =0; i<usuarios3.length;i++){
        if(usuarios3[i][3]==true){
			usuarios3[i][3]==false;
			alert("usuario antigo feito logout");
		}
    }

	usuarios3[pos][3]=true;
	storage.setItem("dados",JSON.stringify(usuarios3));

	if(carrinho.length>1){
		for(var i = 0;i<produtos.length;i++){
			produtos[i][4]=false;
		}
		storage.setItem("produtos",JSON.stringify(produtos));
	}
	
	carrinho=[[]];
	storage.setItem("carrinho",JSON.stringify(carrinho));

	window.location.href = document.location="http://localhost/vinilandia_projetoweb/index.html";
}

function senhas(){
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> Senha não corresponde </div>";
}

function usuaritos(){
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> Usuário não cadastrado </div>";
}

function apagarCampo(){
	document.getElementById("msg").innerHTML = " ";
}

function criarCadastros(){
	if(!(usuarios3 instanceof Array)){
    	usuarios3 = [usuarios3];
		alert('entrou'); 
	}
}

function criarCarrinho(){
	if(!(carrinho instanceof Array)){
    	carrinho = [carrinho]; 
	}
}