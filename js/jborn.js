/* Comentários
(Função Procurar, Função VerMaisDiscos e Função Enviar)
*/
storage = window.localStorage;
var dadosDoStorage2 = JSON.parse(storage.getItem("carrinho"))||"[]";
var carrinho= dadosDoStorage2;

storage = window.localStorage;
var dadosDoStorage3 = JSON.parse(storage.getItem("produtos"))||"[]";
var produtos= dadosDoStorage3;


var produtos_aux = [['dont smile at me','Billie Eiilish',116.10,'img02.png',false],['Fine Line','Harry Styles',204.60,'img03.png',false],
['WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?','Billie Eiilish',115.42,'img04.png',false],['Golden Hour','Kacey Musgraves',121.24,'img05.png',false],
['Rare','Selena Gomez',121.28,'img06.png',false],['Born to Die','Lana Del Rey',116.10,'img07.png',false]];


function pag_login() {
	document.getElementById("img_login").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/login.html"
}

function pag_sacola() {
	document.getElementById("img_sacola").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/sacola-de-compras.html"
}


window.onload = function (){
	criarProdutos();
	montarBotao();
}	


function adicionarCarrinhoBorn(){
	criarCarrinho();
	var id = 6;
	adicionarProduto(id);
}


function criarCarrinho(){
	if(!(carrinho instanceof Array)){
    	carrinho = [carrinho]; 
	}
}

function adicionarProduto(id){
	produtos[id][4]=true;
	carrinho.push(produtos[id]);
	storage.setItem("carrinho",JSON.stringify(carrinho));
	storage.setItem("produtos",JSON.stringify(produtos));
	montarBotao();
}

function montarBotao(){

	document.getElementById("teste3").innerHTML="";
	var conteudo="";

	if(produtos[6][4]==false){
		conteudo += "<button class='button_adicionar_sacola' onclick='adicionarCarrinhoBorn()'> Adicionar à sacola </button>";
	}
	else{
		conteudo += "<p> Na Sacola de Compras! </p>";
	}
	document.getElementById("teste3").innerHTML += conteudo;


}

function criarProdutos(){
	if(!(produtos instanceof Array)){
    	produtos = [produtos];
		for (var i=0; i<produtos_aux.length;i++){
			produtos.push(produtos_aux[i]); 
		}
		storage.setItem("produtos",JSON.stringify(produtos));
	}
	
}

