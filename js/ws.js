$(document).ready(function(){
});


var infoUsuario;


function login(){
	$('form.login').on('submit', function(e){
		e.preventDefault();
		var data = $(this).serialize();
		console.log(data);

		$.post(
		  	'http://nextlab.org/tamal-app/v1/login',
		  	data,
		  	function(response){

				if(response.error == false){
					infoUsuario=response;
					window.location.replace('index.html');

				}else{
					console.log(response);
					var msj = document.getElementById('notificacionError');
					document.getElementById('password').value="";
					msj.innerHTML = "";
					msj.innerHTML ="Error: "+ "Tu contraseña es incorrecta. Intenta de nuevo.";
				}	  		
		  	}
		);
	});
} 

function register(){
	$('form.register').on('submit', function(e){
		e.preventDefault();
		var data = $(this).serialize();
		console.log(data);
		$.post(
		  	'http://nextlab.org/tamal-app/v1/register',
		  	data,
		  	function(response){
		  		console.log(response);

				if(response.error == false){
					infoUsuario=response;
					//window.location.replace('index.html');
				}else{
					document.getElementById('password').value="";
				}	  		
		  	}
		);
	});
} 


var key = '7e8c6d8b48bd0a1a02483a8f00f628a2';


function tamaleros(){
console.log("tamal");
$.ajax({
    type: 'GET',
    url: 'http://nextlab.org/tamal-app/v1/tamaleros',
    headers:{ 'X-Authorization' : key},
    success: function(response) {
        console.log(response);
        infoTamaleros= response;
    },
    error: function(response){
    	console.log(response);
    }
});
}


function buscarPedidos(){
	actualizaCoordenadas();
}

function actualizaCoordenadas(){

}

// Push notification
function registrarEndpoint(){
	console.log('registrar endpoint');

	var regs = navigator.push.registrations();

	regs.onsuccess = function(e) {
		console.log('success');
		console.log(regs.result.length);
		if (regs.result.length == 0) {
	    	var req = navigator.push.register();
	      	req.onsuccess = function() {
	        	var endpoint = req.result;
	        	console.log(endpoint);
	        	//$.post('/endpoint', { endpoint: endpoint })
	    	}
	    	req.onerror = function(e) {
			  	console.log("Error registering the endpoint: " + JSON.stringify(e));
			}
		} else if (regs.result.length > 0) {
			for (var i = 0, l = regs.result.length; i < l; i++) {
				console.log("Existing registration", regs.result[i].pushEndpoint, regs.result[i].version);
			}
			// Reuse existing endpoints.
		} else {
			// Register for a new endpoint.
			var register = navigator.push.register();
			register.onsuccess = function(e) {
				console.log("Registered new endpoint", register.result);
			}
		}
	}
}// registrarEndpoint

function getPushNotification(){
	console.log('getting push...');
	navigator.mozSetMessageHandler('push', function(message) {
		console.log('msg ' + message);
		
	});
}

function registrar(){
  	var req = navigator.push.register();
    req.onsuccess = function() {
        var endpoint = req.result;
    	console.log(endpoint);
    	//$.post('/endpoint', { endpoint: endpoint })
	}
	req.onerror = function(e) {
	  	console.log("Error registering the endpoint: " + JSON.stringify(e));
	}
}