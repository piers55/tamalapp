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
    },
    error: function(response){
    	console.log(response);
    }
});
}


function tamaleros0(){
	console.log("tamaleros");
	$.get(
		'http://nextlab.org/tamal-app/v1/tamaleros',
		function( response) {
		console.log( "response: " +response );	
});
}
