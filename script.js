var nombres=["Juan Usuario", "Pedro Usuario", "Daniel Usuario", "Tobias Usuario", "Carlos Usuario"];
var usuario=["jusuario", "pusuario", "dusuario", "tusuario", "curusario"];
var contrasena=[];

function mostrarUsuario(){
	var html="";
	
	for(var i=0; i<5; i++){
		html+="<tr><td>"+nombres[i]+"</td><td>"+usuario[i]+"</td><td></td></tr>";
	}
	document.getElementById('resultado').innerHTML=html;
}

function generarContrasena(){
	var html="";
	
	for(var i=0; i<5; i++){
		contrasena.push(contrasenaAleatoria());
	}
	
	for(var i=0; i<5; i++){
		html+="<tr><td>"+nombres[i]+"</td><td>"+usuario[i]+"</td><td>"+contrasena[i]+"</td></tr>";
	}
	document.getElementById('resultado').innerHTML=html;
	
	contrasena=[];
}

function contrasenaAleatoria(){
	var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var nuevaContrasena = "";
	
	for(var i = 0, j = caracteres.length; i < 12; i++){
		nuevaContrasena += caracteres.charAt(Math.floor(Math.random() * j));
	}
	
	return nuevaContrasena;
}