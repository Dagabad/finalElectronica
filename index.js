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
	var miLed = new five.Led(13);

	console.log(miLed instanceof Array);

	io.on('connection', function(socket){

		socket.on('primero', function(){

			console.log("Prender")
			miLed.on();
			//led.blink(1000);

		});

		socket.on('secundo', function(){

			console.log("Apagar");
			miLed.stop().off();

		});

		/*
		socket.on('secundo', function(){

			console.log("250")
			var led2 = new five.Led(12);
			led2.blink(250);

		});*/

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