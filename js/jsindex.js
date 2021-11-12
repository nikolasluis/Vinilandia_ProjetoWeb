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

function pag_cadastro() {
	document.getElementById("b_cadastro").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/cadastro.html"
}

function pag_disco01() {
	document.getElementById("b_disco01").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/billie-eilish-dont-smile-at-me.html"
}

function pag_disco02() {
	document.getElementById("b_disco02").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/harry-styles-fine-line.html"
}

function pag_disco03() {
	document.getElementById("b_disco03").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/billie-eilish-when-we-all-fall-asleep-where-do-we-go.html"
}

function pag_disco03() {
	document.getElementById("b_disco03").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/billie-eilish-when-we-all-fall-asleep-where-do-we-go.html"
}

function pag_discos(){
	document.getElementById("b_discos").value
	location.href = "http://localhost/vinilandia_projetoweb/pag/mais-discos.html"
}

window.onload = function (){
	criarProdutos();
	montarBotao();
}	


function adicionarCarrinhoSmile(){
	criarCarrinho();
	var id = 1;
	adicionarProduto(id);
}

function adicionarCarrinhoFine(){
	criarCarrinho();
	var id = 2;
	adicionarProduto(id);
}

function adicionarCarrinhoSleep(){
	criarCarrinho();
	var id = 3;	
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

	document.getElementById("teste").innerHTML="";
	var conteudo="";

	if(produtos[1][4]==false){
		conteudo += "<button class='buttonEtiqueta1' onclick='adicionarCarrinhoSmile()'> COMPRAR </button>";
	}
	else{
		conteudo += "<p> Na Sacola <br> de Compras! </p>";
	}
	document.getElementById("teste").innerHTML += conteudo;


	document.getElementById("teste2").innerHTML ="";
	var conteudo2="";
	if(produtos[2][4]==false){
		conteudo2 += "<button class='buttonEtiqueta2' onclick='adicionarCarrinhoFine()'> COMPRAR </button>";
	}
	else{
		conteudo2 += "<p> Na Sacola <br> de Compras! </p>";
	}
	document.getElementById("teste2").innerHTML += conteudo2;


	document.getElementById("teste3").innerHTML = "";
	var conteudo3="";
	if(produtos[3][4]==false){
		conteudo3 += "<button class='buttonEtiqueta3' onclick='adicionarCarrinhoSleep()'> COMPRAR </button>";
	}
	else{
		conteudo3 += "<p> Na Sacola <br> de Compras! </p>";
	}
	document.getElementById("teste3").innerHTML += conteudo3;

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

function enviar(){
	alert("Sua mensagem foi enviada!!");
}

