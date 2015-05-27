
//script

document.getElementById("formulario").addEventListener("submit",function(){
	var dados = {
		nome : document.getElementById("nome").value,
		ident : document.getElementById("ident").value,
		tel : document.getElementById("tel").value
	}
	localStorage.setItem("dados", JSON.stringify(dados));
	var n = document.getElementById("nome").value;
	localStorage.setItem("n", JSON.stringify(n));
		
});

document.getElementById("botaocarregar").addEventListener("click",function(){
	
	var dados = JSON.parse(localStorage.getItem("dados"));
	
	document.getElementById("nome").value = dados.nome;
	document.getElementById("ident").value = dados.ident;
	document.getElementById("tel").value = dados.tel;
	
});

