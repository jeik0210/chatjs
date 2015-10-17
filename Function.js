function proceso(){
	with(window.document){
	textBlue = getElementById("textBlue");
	infoGreen = getElementById("infoGreen");
	textGreen = getElementById("textGreen");
	infoBlue = getElementById("infoBlue");

	textBlue.addEventListener("focus", escribeFocus, false);
	textBlue.addEventListener("blur", escribeBlur, false);

	textGreen.addEventListener("focus", escribeFocus, false);
	textGreen.addEventListener("blur", escribeBlur, false);

	botonBlue = getElementById("botonBlue");
	botonGreen = getElementById("botonGreen");
	botonBlue.addEventListener("click", setDatosBlue, false);
	botonGreen.addEventListener("click", setDatosGreen, false);
	}
}

function escribeFocus(){
	if (event.target == textBlue) {
		infoGreen.innerHTML = "Escribiendo...";
	};
	if (event.target == textGreen) {
		infoBlue.innerHTML = "Escribiendo...";
	};
}

function escribeBlur(){
	if (event.target == textBlue) {
		infoGreen.innerHTML = "Oliver Gonzalez (en linea)";
	};
	if (event.target == textGreen) {
		infoBlue.innerHTML = "Vivian Soto Soto (en linea)";
	};
}

function setDatosBlue(){
	var getTextB = textBlue.value;
	if(!getTextB == ""){
	var nodo = document.createElement("article");
	var salto = document.createElement("br");
	var textNodo = document.createTextNode(getTextB);
	nodo.appendChild(textNodo);
	nodo.setAttribute("class", "bocadoBlue");
	var data = document.getElementById("data");
	data.appendChild(nodo);
	data.appendChild(salto);
	textBlue.value = "";
	var nodo = document.createElement("article");
	var salto = document.createElement("br");
	var textNodo = document.createTextNode(getTextB);
	nodo.appendChild(textNodo);
	nodo.setAttribute("class", "bocadoBlueGreen");
	var dataGreen = document.getElementById("dataGreen");
	dataGreen.appendChild(nodo);
	dataGreen.appendChild(salto);
	}
}

function setDatosGreen(){
	var getTextG = textGreen.value;
	if(!getTextG == ""){
	var nodo = document.createElement("article");
	var salto = document.createElement("br");
	var textNodo = document.createTextNode(getTextG);
	nodo.appendChild(textNodo);
	nodo.setAttribute("class", "bocadoGreen");
	var data = document.getElementById("data");
	data.appendChild(nodo);
	data.appendChild(salto);
	textGreen.value = "";
	var nodo = document.createElement("article");
	var salto = document.createElement("br");
	var textNodo = document.createTextNode(getTextG);
	nodo.appendChild(textNodo);
	nodo.setAttribute("class", "bocadoGreenBlue");
	var dataGreen = document.getElementById("dataGreen");
	dataGreen.appendChild(nodo);
	dataGreen.appendChild(salto);
	}
}

window.addEventListener("load", proceso, false);