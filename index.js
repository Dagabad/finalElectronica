var express = require('express');
var app = express();

var io = require('socket.io')(app.listen(5000));

var five = require("johnny-five");
//var board = new five.Board();

app.use(express.static(__dirname + '/app'));

//No sé que hace éste código
var board = new five.Board({
	repl:false
});

app.get('/', function(req, res){
	//res.sendfile('/index.html');
	res.sendFile('/index.html');
});

//Adentro código arduino
board.on("ready", function() {

	//Recomendacion sanchez
	//var miLed = [13,12,11];

	//Para primer piso
	var miLed13 = new five.Led(13);

	//Para secundo piso
	var miLed12 = new five.Led(12);

	//Para tercer piso
	var miLed11 = new five.Led(11);

	//Para cuarto piso
	var miLed10 = new five.Led(10);


	//console.log(miLed instanceof Array);

	io.on('connection', function(socket){

		socket.on('primero', function(){

			console.log("Prender Primero")
			miLed13.on();
			//led.blink(1000);

		});

		socket.on('apagarPiso1', function(){

			console.log("Apagar Primero");
			miLed13.stop().off();

		});

		//Secundo
		socket.on('secundo', function(){

			console.log("Prender Secundo")
			miLed12.on();
			//led.blink(1000);

		});

		socket.on('apagarPiso2', function(){

			console.log("Apagar Secundo");
			miLed12.stop().off();

		});


		//Tercero
		socket.on('tercero', function(){

			console.log("Prender Tercero")
			miLed11.on();
			//led.blink(1000);

		});

		socket.on('apagarPiso3', function(){

			console.log("Apagar tercero");
			miLed11.stop().off();

		});


		//Cuarto
		socket.on('cuarto', function(){

			console.log("Prender cuarto")
			miLed10.on();

		});

		socket.on('apagarPiso4', function(){

			console.log("Apagar cuarto");
			miLed10.stop().off();

		});

	});


	/*
	var respuesta = "n";

	if (respuesta == "s") {
		console.log("1000")
		var led = new five.Led(13);
		led.blink(1000);
	}else{
		console.log("250")
		var led = new five.Led(13);
		led.blink(250);
	};

	/*
	console.log("Esta conectado con arduino")
	var led = new five.Led(13);
	led.blink(250);*/
});

console.log("\nEsperando a que inicialice el dispositivo...");