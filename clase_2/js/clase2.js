var alerta = document.getElementById("alerta");

alerta.onclick = function() {
	let campo1 = f1.c1.value;
	let campo2 = f1.c2.value;
	alert("El valor de campo1 es : " +campo1);
	alert("El valor de campo2 es : " +campo2);
}

var multiplicar = document.getElementById("multiplicar");

multiplicar.onclick = function(){
    let campo1 = f1.c1.value;
	let campo2 = f1.c2.value;



	let campo3 = parseFloat(campo1)*parseFloat(campo2);

	
    if(f1.checkbox.checked){
    	campo3 =campo3 * 0.9;
    }else{
    	campo3 = 0;
    }

	txt.innerHTML = campo3;

    f1.reset();

}
var dividir = document.getElementById("dividir")

dividir.onclick = ()=>{

    let campo1 = f1.c1.value;
	let campo2 = f1.c2.value;



	let campo3 = parseFloat(campo1)/parseFloat(campo2);

	txt.innerHTML = campo3;
	document.body.innerHTML+="<p>La division esta hecha</p>"

    f1.reset();

}

var agregarElemento = document.getElementById("element");                                                                                                                               
agregarElemento.onclick = ()=>{

var node = document.createElement("h1");

var textnode = document.createTextNode("Nodo ingresado");

node.appendChild(textnode);

document.getElementById("ingresar").appendChild(node);
}

var cambiarLista = document.getElementById("lista");
cambiarLista.onmousemove = () =>{
	var text = document.createTextNode("cambiando");
	var item = document.getElementById("lista").childNodes[0];
	item.replaceChild(Text, item.childNodes[0])
}

/*function multiplicar(){
	let campo1 = f1.c1.value;
	let campo2 = f1.c2.value;



	let campo3 = parseFloat(campo1)*parseFloat(campo2);

	
    if(f1.checkbox.checked){
    	campo3 =campo3 * 0.9;
    }else{
    	campo3 = 0;
    }

	txt.innerHTML = campo3;

    f1.reset();
}*/