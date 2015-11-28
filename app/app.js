var socket = io();

function primerPiso(){
	socket.emit('primero');
	console.log("primero");
	alert("Primero");
}

function secundoPiso(){
	socket.emit('secundo');
}

document.getElementById('piso1').onclick = primerPiso;
document.getElementById('piso2').onclick = secundoPiso;