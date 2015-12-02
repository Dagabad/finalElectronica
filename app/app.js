var socket = io();

//Prender primer piso
function primerPiso(){
	socket.emit('primero');
	//console.log("primero");
	//alert("Primero");
}

//Apagar primer piso
function primerPisoApagar(){
	socket.emit('apagarPiso1');
	//console.log("primero");
	//alert("Primero");
}


//Prender secundo piso
function secundoPiso(){
	socket.emit('secundo');
}

//Apagar secundo piso
function secundoPisoApagar(){
	socket.emit('apagarPiso2');
}


//Prender tercero piso
function tercerPiso(){
	socket.emit('tercero');
}

//Apagar tercero piso
function tercerPisoApagar(){
	socket.emit('apagarPiso3');
}


//Prender cuarto piso
function cuartoPiso(){
	socket.emit('cuarto');
}

//Apagar cuarto piso
function cuartoPisoApagar(){
	socket.emit('apagarPiso4');
}


//Recogiendo el id de la vista (html)
document.getElementById('piso1').onclick = primerPiso;
document.getElementById('apagarPiso1').onclick = primerPisoApagar;

document.getElementById('piso2').onclick = 	secundoPiso;
document.getElementById('apagarPiso2').onclick = secundoPisoApagar;

document.getElementById('piso3').onclick = 	tercerPiso;
document.getElementById('apagarPiso3').onclick = tercerPisoApagar;

document.getElementById('piso4').onclick = 	cuartoPiso;
document.getElementById('apagarPiso4').onclick = cuartoPisoApagar;

