function mOn(obj) {
	obj.style.color = "#FF0000";
	obj.innerHTML = "Abriu";
	var img = document.createElement("img");
	img.src = "imagens/janelaAberta.jpg";
	document.body.appendChild(img);
}

function mOut(obj) {
	obj.style.color = "#ffff";
	obj.innerHTML = "Fechou";
	var img = document.createElement("img");
	img.src = "imagens/janelaFechada.jpg";
	document.body.appendChild(img);
}

function mClick(obj) {
	obj.style.color = "#ffffff";
	obj.innerHTML = "Quebrou";
	var img = document.createElement("img");
	img.src = "imagens/janelaQuebrada.jpg";
	document.body.appendChild(img);
}