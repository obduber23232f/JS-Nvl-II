/*var url;
window.location=url=prompt("Ingrese el URL");

*/

/*var ancho= screen.width;
var largo = screen.height;

alert("El ancho y largo de la pantalla es:" +ancho+","+largo);
*/
/*function imprimir(){
	window.print();
}*/

/*alert(navigator.appName);
alert(navigator.appVersion);
alert(navigator.product);
alert(navigator.userAgent);
alert(navigator.platform);
alert(navigator.language);
alert(navigator.online);
alert(navigator.cokieEnabled);
*/

function maximizar(){ 

ventana=window.open("cerrar.html","",screen.width,screen.height);
ajustar();
}

function ajustar(){

	ventana.moveTo(0,0);
ventana.resizeTo(screen.width,screen.height);
}

function cerrar(){
	window.close()
}