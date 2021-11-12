/* Comentários
(Função Procurar e Função CriarConta)
*/
storage = window.localStorage;
var dadosDoStorage = JSON.parse(storage.getItem("dados"))||"[]";
var usuarios2 = dadosDoStorage;

function pag_login01() {
	document.getElementById("img_login").value;
	location.href = "http://localhost/vinilandia_projetoweb/pag/login.html";
}

function pag_sacola() {
	document.getElementById("img_sacola").value;
	location.href = "http://localhost/vinilandia_projetoweb/pag/sacola-de-compras.html";
}

function pag_login02() {
	document.getElementById("b_login").value;
	location.href = "http://localhost/vinilandia_projetoweb/pag/login.html";
}

function cadastrar(){
	var aux=[];

	var usuario = document.getElementById("usuario").value;
	var email = document.getElementById("email").value;
	var senha = document.getElementById("senha").value;
	var confirmarSenha = document.getElementById("confirmarSenha").value;
	var login = false;


	for(var i=0; i<usuarios2.length; i++){
		if(usuario == usuarios2[i][0]){
			usuaritos();
			carinha.usuario.focus();
			return false;
		}
	}

	apagarCampo();

	for(var i=0; i<usuarios2.length; i++){
		if(email == usuarios2[i][1]){
			emailzito();
			confirmationEmail.email.focus();
			return false;
		}
	}

	apagarCampo();

	if(senha!=confirmarSenha){
		senhas();
		senhazinha.confirmarSenha.focus();
		return false;
	}

	aux.push(usuario);
	aux.push(email);
	aux.push(senha);
	aux.push(login);


	if(!(usuarios2 instanceof Array)){
    	usuarios2 = [usuarios2]; 
	}

	usuarios2.push(aux);

	storage.setItem("dados",JSON.stringify(usuarios2));

	window.location.href = document.location="http://localhost/vinilandia_projetoweb/index.html";
}

function senhas(){
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> Senhas não correspondem - Tente novamente </div>";
}

function usuaritos(){
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> Usuário já existente - insira um diferente </div>";
}

function emailzito(){
	document.getElementById("msg").innerHTML = " ";
	document.getElementById("msg").innerHTML = "<div> E-mail já cadastrado - insira um diferente </div>";
}

function apagarCampo(){
	document.getElementById("msg").innerHTML = " ";
}